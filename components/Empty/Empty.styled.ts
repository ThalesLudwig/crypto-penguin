import Image from "next/image";
import styled from "styled-components";
import { SCREEN } from "../../constants/screen";
import { TYPOGRAPHY } from "../../constants/typography";

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const EmptyMessage = styled.p`
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
  font-weight: ${TYPOGRAPHY.WEIGHT.REGULAR};
  color: ${({ theme }) => theme.TEXT};
  margin: 0;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZE.BODY_2};
  }
`;

export const EmptyImg = styled(Image).attrs({ width: 150, height: 150, src: "/assets/explore.png", alt: "penguin" })`
  display: flex;
  align-self: center;
  margin-bottom: 20px;
`;
