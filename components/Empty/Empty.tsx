import { EmptyImg, EmptyMessage, EmptyWrapper } from "./Empty.styled";

type EmptyPropType = { isEmpty: boolean; message1?: string; message2?: string };

function Empty({ isEmpty, message1, message2 }: EmptyPropType) {
  return isEmpty ? (
    <EmptyWrapper>
      <EmptyImg />
      <EmptyMessage>{message1 || "Nothing to see here!"}</EmptyMessage>
      {message2 && <EmptyMessage>{message2}</EmptyMessage>}
    </EmptyWrapper>
  ) : (
    <></>
  );
}

export default Empty;
