import { Alchemy, Network, OwnedNft } from "alchemy-sdk";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import { getDisplayName } from "../helpers/getDisplayName";
import {
  Container,
  Title,
  Tab,
  TabWrapper,
  TitleWrapper,
  ProfileImage,
  GridContainer,
  SelectWraper,
  Select,
} from "../styles/Profile.styled";
import StoreType from "../types/StoreType";
import { ethers } from "ethers";
import { ADDRESSES } from "../constants/addresses";
import ABI from "../abi/cryptoPenguin.json";
import Empty from "../components/Empty/Empty";
import AlbumNft from "../types/AlbumNft";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Profile({ alchemy: mumbaiProvider }) {
  const { account } = useSelector((store: StoreType) => store);
  const [isLoading, setIsLoading] = useState(false);
  const [album, setAlbum] = useState<AlbumNft[]>([]);
  const [owned, setOwned] = useState<OwnedNft[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [network, setNetwork] = useState<Network>(Network.ETH_MAINNET);

  const fetchAlbum = useCallback(async () => {
    setIsLoading(true);
    const provider = await mumbaiProvider.config.getProvider();
    const contract = new ethers.Contract(ADDRESSES.CRYPTO_PENGUIN_CONTRACT, ABI, provider);
    const metamask = new ethers.providers.Web3Provider((window as any).ethereum);
    const contractSigned = contract.connect(metamask.getSigner());
    try {
      const list = await contractSigned.getCollectibles();
      setAlbum(list);
    } catch (error) {
      toast.error("Something happened when fetching your album. Please try again!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [mumbaiProvider]);

  const fetchOwned = useCallback(async () => {
    setIsLoading(true);
    try {
      const config = { apiKey: process.env.NEXT_PUBLIC_ALCHEMY_APP_ID, network };
      const alchemy = new Alchemy(config);
      const { ownedNfts } = await alchemy.nft.getNftsForOwner(account.address);
      setOwned(ownedNfts);
    } catch (error) {
      toast.error("Something happened when fetching your owned NFTs. Please try again!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [network, account]);

  useEffect(() => {
    fetchAlbum();
  }, [fetchAlbum]);

  useEffect(() => {
    fetchOwned();
  }, [network, fetchOwned]);

  return (
    <Container>
      <TitleWrapper>
        <ProfileImage seed={account.address} size={13} scale={4} />
        <Title>{getDisplayName(account.address)}</Title>
      </TitleWrapper>
      <TabWrapper>
        <Tab isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)}>
          Wishlist
        </Tab>
        <Tab isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)}>
          Owned
        </Tab>
      </TabWrapper>
      {!!isLoading && <Loading isLoading={isLoading} />}
      {selectedTab === 0 && !isLoading && (
        <Fragment>
          <Empty
            isEmpty={album.length === 0}
            message1="Your wishlist is empty!"
            message2="You can search NFTs by clicking on the search icon"
          />
          <GridContainer>
            {album.map((nft) => (
              <Card
                key={nft.tokenId}
                id={nft.tokenId}
                title={nft.title}
                imageUrl={nft.imageUrl}
                contractName={nft.collectionName}
                currency={nft.network as Network}
                address={nft.tokenContract}
              />
            ))}
          </GridContainer>
        </Fragment>
      )}
      {selectedTab === 1 && !isLoading && (
        <Fragment>
          <SelectWraper>
            <Select value={network} onChange={(e) => setNetwork(e.target.value as Network)}>
              <option value={Network.ETH_MAINNET}>Ethereum</option>
              <option value={Network.ETH_GOERLI}>Goerli</option>
              <option value={Network.MATIC_MAINNET}>Polygon</option>
              <option value={Network.MATIC_MUMBAI}>Mumbai</option>
            </Select>
          </SelectWraper>
          <Empty isEmpty={owned.length === 0} message1="No owned NFTs!" message2="Try minting something" />
          <GridContainer>
            {owned.map((nft) => (
              <Card
                key={nft.tokenId}
                id={nft.tokenId}
                title={nft.title}
                imageUrl={nft.media[0]?.gateway}
                contractName={nft.contract?.name}
                address={nft.contract?.address}
                currency={Network.MATIC_MUMBAI}
              />
            ))}
          </GridContainer>
        </Fragment>
      )}
    </Container>
  );
}
