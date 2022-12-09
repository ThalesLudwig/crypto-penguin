import React from "react";
import { Network } from "alchemy-sdk";
import { Container, Text, PriceWrapper, TokenImage } from "./Card.styled";
import { useRouter } from "next/router";

type Props = {
  imageUrl: string;
  title: string;
  currency?: Network;
  contractName: string;
  id: string;
  address: string;
};

const Card: React.FC<Props> = ({ imageUrl, title, contractName, currency, id, address }) => {
  const { push } = useRouter();

  const getCurrency = () => {
    if (!currency) return "ETH";
    return currency == Network.ETH_MAINNET || currency == Network.ETH_GOERLI ? "ETH" : "MATIC";
  };

  return (
    <Container onClick={() => push({ pathname: "/token", query: { id: id, contract: address, network: currency } })}>
      <TokenImage alt="nft" src={imageUrl} />
      <PriceWrapper>
        <Text>{contractName}</Text>
        <Text>{getCurrency()}</Text>
      </PriceWrapper>
      <Text>{title}</Text>
    </Container>
  );
};

export default Card;
