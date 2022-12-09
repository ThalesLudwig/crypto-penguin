import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants/typography";
import ThemeType from "../../types/ThemeType";

export const Container = styled.div`
  padding: 11px;
  border: 1px solid ${({ theme }) => theme.BORDER};
  background-color: ${({ theme }) => theme.BACKGROUND};
  border-radius: 5px;
  height: 45px;
  max-height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:focus-within {
    outline: auto;
    outline-color: ${({ theme }: { theme: ThemeType }) => theme.ACCENT};
  }
`;

export const NativeInput = styled.input`
  color: ${({ theme }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  background-color: ${({ theme }) => theme.BACKGROUND};
  outline-color: ${({ theme }: { theme: ThemeType }) => theme.ACCENT};
  border: none;
  outline: none;
  width: 100%;
`;

export const SearchButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  cursor: pointer;
  background-color: ${({ theme }) => theme.BACKGROUND};
  display: flex;
`;
