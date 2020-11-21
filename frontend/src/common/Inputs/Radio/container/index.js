import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Radio from "../component";

const RadioContainer = ({ marginLeft, input, values }) => {
  const onChange = useCallback(
    (value) => {
      input.onChange(value);
    },
    [input]
  );

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

RadioContainer.propTypes = {
  marginLeft: PropTypes.string,
  input: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
};
