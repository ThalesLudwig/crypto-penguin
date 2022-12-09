import styled from "styled-components";
import { SCREEN } from "../constants/screen";
import { TYPOGRAPHY } from "../constants/typography";
import ThemeType from "../types/ThemeType";
import Blockie from "react-blockies";

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND};
  padding: 15px;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    min-height: 60vh;
    margin-bottom: 150px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
  font-weight: ${TYPOGRAPHY.WEIGHT.BOLD};
  margin: 0;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  }
`;

export const Text = styled.span`
  color: ${({ theme }: { theme: ThemeType }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  font-weight: ${TYPOGRAPHY.WEIGHT.REGULAR};

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZE.BODY_2};
  }
`;

export const Disclaimer = styled.span`
  color: ${({ theme }: { theme: ThemeType }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZE.BODY_2};
  font-weight: ${TYPOGRAPHY.WEIGHT.REGULAR};
  max-width: 330px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  padding: 5px;
  align-self: center;

  @media only screen and (max-width: ${SCREEN.TABLET}) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const ImageButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 10px;
`;

export const TokenImage = styled.div<{ src: string }>`
  background-color: ${({ theme }) => theme.BORDER};
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  width: 350px;
  border-radius: 10px;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    width: 100%;
  }
`;
