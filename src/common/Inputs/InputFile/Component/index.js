import React from "react";
import PropTypes from "prop-types";

import { InputItem, Cover, Border, ImageWrapper } from "./styles";

const InputFile = ({ input, srcValue, onChange }) => {
  return (
    <Cover>
      {srcValue ? <ImageWrapper src={srcValue} alt="Обложка" /> : <Border />}
      <InputItem type="file" onChange={onChange} {...input} />
    </Cover>
  );
};

export default InputFile;

InputFile.propTypes = {
  input: PropTypes.string,
  srcValue: PropTypes.string,
  onChange: PropTypes.func,
};
