import React from "react";

import { InputProgress } from "../Component";

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
