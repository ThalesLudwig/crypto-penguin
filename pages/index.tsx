import Image from "next/image";
import Card from "../components/Card/Card";
import { Hero, Title, Paragraph, HeroWrapper, Featured } from "../styles/Home.styled";
import { Network, Alchemy, Nft } from "alchemy-sdk";
import { ADDRESSES } from "../constants/addresses";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
//
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [nfts, setNFTs] = useState<Nft[]>([]);

  const fetchNFTs = async () => {
    const config = {
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_APP_ID,
      network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(config);
    const response = await alchemy.nft.getNftsForContract(ADDRESSES.OPENSEA, { pageSize: 35 });
    setNFTs(response.nfts);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchNFTs();
  }, []);

  return (
    <Hero>
      <HeroWrapper>
        <Image alt="hero" src="/assets/hero.png" width={200} height={200} />
        <Title>The personal NFT multichain wishlist</Title>
        <Paragraph>Browse the Blockchain and add NFTs to your album with ease, 100% descentralized.</Paragraph>
      </HeroWrapper>
      <Featured isLoading={isLoading}>
        {!!isLoading && <Loading isLoading={isLoading} />}
        {nfts
          .filter((nft) => !!nft.media[0])
          .map((nft) => (
            <Card
              key={nft.tokenId}
              id={nft.tokenId}
              title={nft.title}
              imageUrl={nft.media[0]?.gateway}
              contractName={nft.contract.name}
              address={nft.contract.address}
            />
          ))}
      </Featured>
    </Hero>
  );
}
