import React from "react";
import { Container } from "./Button.styled";

type Props = {
  children: any;
  onClick?: Function;
  isOutlined?: boolean;
  shouldExpand?: boolean;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<Props> = ({ children, onClick, isOutlined, shouldExpand, isDisabled, type }) => {
  return (
    <Container
      type={type}
      isDisabled={isDisabled}
      isOutlined={!!isOutlined}
      onClick={() => onClick && !isDisabled && onClick()}
      shouldExpand={shouldExpand}
    >
      {children}
    </Container>
  );
};

export default Button;
