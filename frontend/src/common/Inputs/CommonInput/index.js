import React from "react";
import PropTypes from "prop-types";

import {
  InputWrapper,
  Label,
  InputItem,
  TextAreaWrapper,
  Select,
  Option,
} from "./styles";

const Input = ({ isNotTextArea, type, label, placeholder, width, input }) => {
  return (
    <InputWrapper>
      <Label htmlFor={InputItem}>{label}</Label>
      {!isNotTextArea ? (
        type === "select" ? (
          <>
            <Select type={type} {...input}>
              <Option value="Мелкий">Мелкий</Option>
              <Option value="Средний">Средний</Option>
              <Option value="Крупный">Крупный</Option>
            </Select>
          </>
        ) : (
          <InputItem
            type={type}
            name={label}
            placeholder={placeholder}
            width={width}
            {...input}
          />
        )
      ) : (
        <TextAreaWrapper placeholder={placeholder} {...input} />
      )}
    </InputWrapper>
  );
};

export default Input;

Input.propTypes = {
  isNotTextArea: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  input: PropTypes.string,
};
