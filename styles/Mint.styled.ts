import { SCREEN } from "./../constants/screen";
import styled from "styled-components";
import { TYPOGRAPHY } from "../constants/typography";
import ThemeType from "../types/ThemeType";

const getDropzoneColor = (props: any) => {
  if (props.isDragAccept) {
    return props.theme.ACCENT;
  }
  if (props.isDragReject) {
    return "red";
  }
  if (props.isFocused) {
    return props.theme.ACCENT;
  }
  return "#eeeeee";
};

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND};
  padding: 15px;
  align-items: center;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    min-height: 60vh;
    margin-bottom: 150px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND};
  width: 100%;
  gap: 10px;
  max-width: ${SCREEN.TABLET};
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

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Dropzone = styled.div`
  display: flex;
  border-width: 3px;
  border-radius: 10px;
  border-color: ${(props) => getDropzoneColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
  max-width: 350px;
  height: 250px;
`;

export const ImageAsset = styled.div`
  background-color: ${({ theme }: { theme: ThemeType }) => theme.CARD};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
`;

export const Required = styled.span`
  color: red;
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
`;

export const RequiredWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  font-weight: ${TYPOGRAPHY.WEIGHT.REGULAR};
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }: { theme: ThemeType }) => theme.BORDER};
  background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND};
  color: ${({ theme }: { theme: ThemeType }) => theme.TITLE};
  border-radius: 5px;
  font-size: ${TYPOGRAPHY.SIZE.BODY_2};
  outline-color: ${({ theme }: { theme: ThemeType }) => theme.ACCENT};
  margin: 2px 0 15px 0;
  min-height: 110px;
  font-family: inherit;
`;
