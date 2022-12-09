import { Alchemy, Network, Nft } from "alchemy-sdk";
import { useCallback, useEffect, useMemo, useState } from "react";
import Loading from "../components/Loading/Loading";
import {
  Container,
  Title,
  DataWrapper,
  TokenImage,
  Column,
  Text,
  InformationWrapper,
  ImageButtonWrapper,
  Disclaimer,
} from "../styles/Token.styled";
import { ethers } from "ethers";
import { ADDRESSES } from "../constants/addresses";
import ABI from "../abi/cryptoPenguin.json";
import { useRouter } from "next/router";
import Collapsable from "../components/Collapsable/Collapsable";
import Button from "../components/Button/Button";
import { FiCloud, FiCloudOff } from "react-icons/fi";
import AlbumNft from "../types/AlbumNft";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import StoreType from "../types/StoreType";

export default function Token({ alchemy: mumbaiProvider }) {
  const { account } = useSelector((store: StoreType) => store);
  const { query } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [album, setAlbum] = useState<AlbumNft[]>([]);
  const [nft, setNft] = useState<Nft>();

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

  const fetchMetadata = useCallback(async () => {
    if (!query?.contract) return;
    setIsLoading(true);
    const config = { apiKey: process.env.NEXT_PUBLIC_ALCHEMY_APP_ID, network: query.network as Network };
    const alchemy = new Alchemy(config);
    try {
      const response = await alchemy.nft.getNftMetadata(query.contract.toString(), query.id.toString());
      setNft(response);
    } catch (error) {
      toast.error("Something happened when fetching this NFT. Please try again!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  const isNftOnAlbum = useMemo((): boolean => {
    return !!album.find((albumNft) => albumNft.tokenContract === query.contract && albumNft.tokenId === query.id);
  }, [album, query]);

  const addToAlbum = async () => {
    setIsLoading(true);
    const provider = await mumbaiProvider.config.getProvider();
    const contract = new ethers.Contract(ADDRESSES.CRYPTO_PENGUIN_CONTRACT, ABI, provider);
    const metamask = new ethers.providers.Web3Provider((window as any).ethereum);
    const contractSigned = contract.connect(metamask.getSigner());
    try {
      const response = await contractSigned.addToCollection(
        query.contract,
        query.id,
        nft.title,
        nft.media[0]?.gateway || "",
        nft.contract.name,
        query.network,
      );
      await response.wait();
      toast.success("NFT added to album successfully");
    } catch (error) {
      toast.error("Oops! Something wrong happened. Please try again!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromAlbum = async () => {
    setIsLoading(true);
    const provider = await mumbaiProvider.config.getProvider();
    const contract = new ethers.Contract(ADDRESSES.CRYPTO_PENGUIN_CONTRACT, ABI, provider);
    const metamask = new ethers.providers.Web3Provider((window as any).ethereum);
    const contractSigned = contract.connect(metamask.getSigner());
    try {
      const response = await contractSigned.removeFromCollection(query.contract, query.id);
      await response.wait();
      toast.success("NFT removed from album successfully");
    } catch (error) {
      toast.error("Oops! Something wrong happened. Please try again!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbum();
    fetchMetadata();
  }, [fetchAlbum, fetchMetadata]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      {!isLoading && !!nft && (
        <DataWrapper>
          <ImageButtonWrapper>
            <TokenImage src={nft?.media[0]?.gateway} />
            {isNftOnAlbum && !!account.address && (
              <Button onClick={removeFromAlbum} shouldExpand isOutlined={false}>
                <span>REMOVE FROM ALBUM</span>
                <FiCloudOff />
              </Button>
            )}
            {!isNftOnAlbum && !!account.address && (
              <Button onClick={addToAlbum} shouldExpand isOutlined={false}>
                <span>ADD TO ALBUM</span>
                <FiCloud />
              </Button>
            )}
            {!!account.address && (
              <Disclaimer>
                Don&apos;t worry, everything is done on the Mumbai test Network, for free! For this reason, if the
                operation fails, please try again.
              </Disclaimer>
            )}
          </ImageButtonWrapper>
          <Column>
            <Title>{nft.contract.name}</Title>
            <Title>{nft.title}</Title>
            <Collapsable isOpen title="Description">
              <Text>{nft.description}</Text>
            </Collapsable>
            <Collapsable title="Contract">
              <Column>
                <InformationWrapper>
                  <Text>Address:</Text>
                  <Text>{nft.contract.address}</Text>
                </InformationWrapper>
                <InformationWrapper>
                  <Text>Name:</Text>
                  <Text>{nft.contract.name}</Text>
                </InformationWrapper>
                <InformationWrapper>
                  <Text>Type:</Text>
                  <Text>{nft.contract.tokenType}</Text>
                </InformationWrapper>
                <InformationWrapper>
                  <Text>Total Supply:</Text>
                  <Text>{nft.contract.totalSupply}</Text>
                </InformationWrapper>
              </Column>
            </Collapsable>
            <Collapsable title="Attributes">
              <Column>
                {nft.rawMetadata?.attributes?.map((attr, i) => (
                  <InformationWrapper key={i}>
                    <Text>{attr?.trait_type}:</Text>
                    <Text>{attr?.value}</Text>
                  </InformationWrapper>
                ))}
              </Column>
            </Collapsable>
          </Column>
        </DataWrapper>
      )}
    </Container>
  );
}
