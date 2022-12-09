import styled from "styled-components";
import { ELEVATION } from "../../constants/elevation";
import { SCREEN } from "../../constants/screen";
import ThemeType from "../../types/ThemeType";

export const Container = styled.footer`
  position: fixed;
  height: 72px;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: ${ELEVATION.NAVIGATION};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND}; */

  @media only screen and (max-width: ${SCREEN.TABLET}) {
    flex-direction: column;
    align-items: flex-start;
    height: 100px;
  }
`;

export const Redirect = styled.a`
  padding: 0 10px;
  cursor: pointer;
  white-space: nowrap;
  flex: 1;
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};

  @media only screen and (max-width: ${SCREEN.TABLET}) {
    padding: 0 20px 0 0;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }: { theme: ThemeType }) => theme.TEXT};
`;
