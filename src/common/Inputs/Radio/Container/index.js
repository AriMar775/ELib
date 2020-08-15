import React from "react";

import { Radio } from "../Component";

const RadioContainer = ({ marginLeft, input, values }) => {
  const onChange = (value) => {
    input.onChange(value);
  };

  return (
    <Radio
      marginLeft={marginLeft}
      onChange={onChange}
      values={values}
      active={input.value}
    />
  );
};

export default RadioContainer;
