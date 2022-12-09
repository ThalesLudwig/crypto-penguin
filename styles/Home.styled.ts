import styled from "styled-components";
import { SCREEN } from "../constants/screen";
import { TYPOGRAPHY } from "../constants/typography";
import ThemeType from "../types/ThemeType";

export const Hero = styled.main`
  min-height: 80vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND};
  padding-bottom: 72px;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    min-height: 60vh;
  }
`;

export const HeroWrapper = styled.section`
  max-width: 800px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};
  font-size: ${TYPOGRAPHY.SIZE.HERO};
  font-weight: ${TYPOGRAPHY.WEIGHT.BOLD};
  line-height: 100%;
  margin: 30px 0;

  @media only screen and (max-width: ${SCREEN.TABLET}) {
    font-size: ${TYPOGRAPHY.SIZE.TITLE};
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  font-weight: ${TYPOGRAPHY.WEIGHT.BOLD};
  max-width: 570px;
  margin-bottom: 120px;
`;

export const Featured = styled.div<{ isLoading: boolean }>`
  height: 450px;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.ACCENT};
  overflow-x: scroll;
  align-items: center;
  justify-content: ${({ isLoading }) => (isLoading ? "center" : "flex-start")};
  padding: 0 28px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }: { theme: ThemeType }) => theme.ACCENT};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }: { theme: ThemeType }) => theme.CARD};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
