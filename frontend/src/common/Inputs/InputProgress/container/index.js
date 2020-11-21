import React from "react";
import PropTypes from "prop-types";

import InputProgress from "../component";

const InputProgressContainer = ({ label, placeholder, width, input }) => {
  return (
    <InputProgress
      label={label}
      placeholder={placeholder}
      width={width}
      input={input}
    />
  );
};

export default InputProgressContainer;

InputProgressContainer.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  input: PropTypes.string,
};
