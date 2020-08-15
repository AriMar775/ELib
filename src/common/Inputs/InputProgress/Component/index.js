import React from "react";

import { InputWrapper, Label, InputItem } from "./styles";

export const InputProgress = ({ label, placeholder, width, input }) => {
  return (
    <InputWrapper>
      <Label htmlFor={InputItem}>{label}</Label>
      <InputItem
        type="number"
        placeholder={placeholder}
        width={width}
        {...input}
      />
    </InputWrapper>
  );
};
