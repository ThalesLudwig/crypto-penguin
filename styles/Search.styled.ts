import styled from "styled-components";
import { SCREEN } from "../constants/screen";
import { TYPOGRAPHY } from "../constants/typography";
import ThemeType from "../types/ThemeType";

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

export const NftsList = styled.section`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND};
  padding: 60px 15px;
  flex-wrap: wrap;
  gap: 30px;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-self: center;
  max-width: 500px;
  width: 100%;
  flex-wrap: wrap;
`;

export const SelectWraper = styled.div`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.BORDER};
  background-color: ${({ theme }) => theme.BACKGROUND};
  border-radius: 10px;
  height: 45px;
  display: flex;
  align-items: center;
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
  max-height: 45px;
  min-width: 45px;
  outline: none;
`;
