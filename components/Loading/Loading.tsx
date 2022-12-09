import { LoadingImg, LoadingMessage, LoadingWrapper } from "./LoadingStyled";

type LoadingPropType = { isLoading: boolean };

function Loading({ isLoading }: LoadingPropType) {
  return isLoading ? (
    <LoadingWrapper>
      <LoadingImg />
      <LoadingMessage>Loading... Please wait!</LoadingMessage>
    </LoadingWrapper>
  ) : (
    <></>
  );
}

export default Loading;
