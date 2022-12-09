import React from "react";
import { FiSearch } from "react-icons/fi";
import { Container, NativeInput, SearchButton } from "./Input.styled";

type Props = {
  value: string;
  onChange: Function;
  placeholder?: string;
  onSearch?: Function;
  hasSearch?: boolean;
  type?: string;
  id?: string;
};

const Input: React.FC<Props> = (props) => {
  return (
    <Container>
      <NativeInput
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
      />
      {props.hasSearch && (
        <SearchButton onClick={() => props.onSearch()}>
          <FiSearch />
        </SearchButton>
      )}
    </Container>
  );
};

export default Input;
