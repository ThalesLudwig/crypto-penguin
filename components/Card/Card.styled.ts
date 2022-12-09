import styled from "styled-components";
import { SCREEN } from "../../constants/screen";
import { TYPOGRAPHY } from "../../constants/typography";

export const Container = styled.div`
  padding: 11px;
  color: ${({ theme }) => theme.TITLE};
  cursor: pointer;
  background-color: ${({ theme }) => theme.CARD};
  border-radius: 15px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  height: 350px;
  min-width: 250px;
  width: 250px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.BORDER};

  &:hover {
    transform: translateY(-3px);
  }

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    height: 400px;
    width: 100%;
    gap: 5px;
  }
`;

export const TokenImage = styled.img`
  background-color: ${({ theme }) => theme.BORDER};
  height: 80%;
  max-height: 244px;
  width: 100%;
  border-radius: 10px;
`;

export const Text = styled.b`
  color: ${({ theme }) => theme.TITLE};
  font-size: ${TYPOGRAPHY.SIZE.BODY_2};
  font-weight: ${TYPOGRAPHY.WEIGHT.BOLD};

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZE.BODY_2};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
