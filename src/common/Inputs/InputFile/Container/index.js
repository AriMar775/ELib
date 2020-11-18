import React from "react";
import PropTypes from "prop-types";

import InputFile from "../component";

const InputFileContainer = ({ input, srcValue }) => {
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      file && reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function onChange(e) {
    input.onChange(await toBase64(e.target.files[0]));
  }

  return <InputFile onChange={onChange} srcValue={srcValue} />;
};

export default InputFileContainer;

InputFileContainer.propTypes = {
  input: PropTypes.string,
  srcValue: PropTypes.string,
};
