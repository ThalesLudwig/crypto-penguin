import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants/typography";

type props = {
  isOutlined: boolean;
  shouldExpand?: boolean;
  isDisabled?: boolean;
};

export const Container = styled.button<props>`
  padding: 11px;
  border: 1px solid ${({ theme }) => theme.BORDER};
  color: ${({ theme, isOutlined }) => (isOutlined ? theme.TEXT : theme.BACKGROUND)};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  background-color: ${({ theme, isOutlined, isDisabled }) => {
    if (isDisabled) return theme.BORDER;
    if (isOutlined) return theme.BACKGROUND;
    return theme.ACCENT;
  }};
  border-radius: 10px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  height: 45px;
  max-height: 45px;
  min-width: 45px;
  width: 100%;
  max-width: ${({ shouldExpand }) => (shouldExpand ? "100%" : "max-content")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: ${({ isDisabled }) => (isDisabled ? "none" : "translateY(-3px)")};
  }
`;
