import { FormEvent, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import { Container, NftsList, SearchForm, Select, SelectWraper } from "../styles/Search.styled";
import Empty from "../components/Empty/Empty";
import { Alchemy, Network, Nft } from "alchemy-sdk";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { FiSearch } from "react-icons/fi";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { ADDRESSES } from "../constants/addresses";

export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [network, setNetwork] = useState<Network>(Network.ETH_MAINNET);
  const [nfts, setNFTs] = useState<Nft[]>([]);
  const [pageKey, setPageKey] = useState("");

  const fetchNFTs = async (e?: FormEvent<HTMLFormElement>) => {
    if (!search) return;
    setHasSearched(true);
    setIsLoading(true);
    e?.preventDefault();
    const config = { apiKey: process.env.NEXT_PUBLIC_ALCHEMY_APP_ID, network };
    const alchemy = new Alchemy(config);
    const response = await alchemy.nft.getNftsForContract(search, { pageSize: 18, pageKey });
    setNFTs([...nfts, ...response.nfts]);
    setPageKey(response.pageKey);
    setIsLoading(false);
  };

  useEffect(() => {
    setNFTs([]);
    setPageKey("");
    setHasSearched(false);
  }, [network, search]);

  return (
    <Container>
      <SearchForm id="search-form" onSubmit={fetchNFTs}>
        <Input onSearch={fetchNFTs} value={search} onChange={setSearch} placeholder="0x00000..." />
        <SelectWraper>
          <Select form="search-form" value={network} onChange={(e) => setNetwork(e.target.value as Network)}>
            <option value={Network.ETH_MAINNET}>Ethereum</option>
            <option value={Network.ETH_GOERLI}>Goerli</option>
            <option value={Network.MATIC_MAINNET}>Polygon</option>
            <option value={Network.MATIC_MUMBAI}>Mumbai</option>
          </Select>
        </SelectWraper>
        <Button
          type="button"
          isOutlined
          onClick={() => {
            setNetwork(Network.ETH_MAINNET);
            setSearch(ADDRESSES.OPENSEA);
          }}
        >
          <span>OpenSea</span>
        </Button>
        <Button
          type="button"
          isOutlined
          onClick={() => {
            setNetwork(Network.ETH_MAINNET);
            setSearch(ADDRESSES.RARIBLE);
          }}
        >
          <span>Rarible</span>
        </Button>
        <Button onClick={fetchNFTs}>
          <span>Search</span>
          <FiSearch />
        </Button>
      </SearchForm>
      <Empty
        isEmpty={nfts.length === 0 && !isLoading}
        message1={`${hasSearched ? "Nothing to show here!" : "Start searching for any address!"}`}
        message2={`${hasSearched ? "I couldn't find anything on this address." : ""}`}
      />
      <Loading isLoading={isLoading} />
      <InfiniteScroll
        dataLength={nfts.length}
        next={fetchNFTs}
        hasMore={!!pageKey}
        loader={<Loading isLoading={true} />}
      >
        <NftsList>
          {nfts.map((nft) => (
            <Card
              key={nft.tokenId}
              id={nft.tokenId}
              title={nft.title}
              imageUrl={nft.media[0]?.gateway}
              contractName={nft.contract.name}
              address={nft.contract.address}
              currency={network}
            />
          ))}
        </NftsList>
      </InfiniteScroll>
    </Container>
  );
}
