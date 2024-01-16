import React from "react";
import { ButtonWrapper } from "./ButtonWrapper";

const style = {
  background: "#800",
  color: "#fff",
  padding: 12,
};

const Button = () => (
  <ButtonWrapper>
    <button style={style}>App 1 Button</button>
  </ButtonWrapper>
);

export default Button;
