import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants/typography";
import ThemeType from "../../types/ThemeType";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }: { theme: ThemeType }) => theme.BORDER};
  border-radius: 10px;
  width: 100%;
  height: max-content;
`;

type HeaderType = {
  theme: ThemeType;
  isOpen?: boolean;
};

export const Header = styled.div<HeaderType>`
  padding: 15px;
  background-color: ${({ theme }) => theme.NAVIGATION};
  color: ${({ theme }) => theme.TITLE};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  font-weight: ${TYPOGRAPHY.WEIGHT.REGULAR};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: ${(props) => (props.isOpen ? "10px 10px 0 0" : "10px")};
  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
`;

export const Content = styled.div`
  display: flex;
  padding: 15px;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND};
  border-radius: 0 0 10px 10px;
  flex-wrap: wrap;
  gap: 10px;
  word-break: break-all;
  min-height: 80px;
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};
`;
