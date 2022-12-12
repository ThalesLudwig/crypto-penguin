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
  padding-bottom: 70px;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    min-height: 60vh;
    margin-bottom: 150px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};
  font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
  font-weight: ${TYPOGRAPHY.WEIGHT.BOLD};
  line-height: 100%;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  }
`;

export const Tab = styled.b<{ isSelected: boolean }>`
  cursor: pointer;
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  font-weight: ${({ isSelected }) => (isSelected ? TYPOGRAPHY.WEIGHT.BOLD : TYPOGRAPHY.WEIGHT.REGULAR)};
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  justify-content: center;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }: { theme: ThemeType }) => theme.BORDER};
  margin-bottom: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const ProfileImage = styled(Blockie)`
  border-radius: 50%;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 15px;
  flex-wrap: wrap;
`;

export const SelectWraper = styled.div`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.BORDER};
  background-color: ${({ theme }) => theme.BACKGROUND};
  border-radius: 10px;
  height: 45px;
  display: flex;
  width: 250px;
  align-items: center;
  align-self: center;
  &:focus-within {
    outline: auto;
  }
`;

export const Select = styled.select`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.BORDER};
  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
  color: ${({ theme }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  cursor: pointer;
  background-color: ${({ theme }) => theme.BACKGROUND};
  height: 45px;
  width: 100%;
  min-width: 45px;
  outline: none;
`;
