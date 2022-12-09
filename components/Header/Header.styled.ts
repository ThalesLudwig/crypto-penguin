import styled from "styled-components";
import { ELEVATION } from "../../constants/elevation";
import { SCREEN } from "../../constants/screen";
import { TYPOGRAPHY } from "../../constants/typography";
import Button from "../Button/Button";

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: ${ELEVATION.NAVIGATION};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    justify-content: center;
    width: 100%;
  }
`;

export const Title = styled.b`
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
  color: ${({ theme }) => theme.TITLE};
  cursor: pointer;
  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    display: none;
  }
`;

export const MobileOnly = styled.span`
  display: none;
  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    display: block;
  }
`;

export const ProfileWrapper = styled.div`
  display: auto;
  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    display: none;
  }
`;
