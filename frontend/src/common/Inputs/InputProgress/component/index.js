import React from "react";
import PropTypes from "prop-types";

import { InputWrapper, Label, InputItem } from "./styles";

const InputProgress = ({ label, placeholder, width, input }) => {
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

export default InputProgress;

InputProgress.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  input: PropTypes.string,
};
