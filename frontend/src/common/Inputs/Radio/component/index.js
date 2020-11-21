import React from "react";
import PropTypes from "prop-types";

import { RadioWrapper, FlatBtnWrapper } from "./styles.js";

const Radio = ({ marginLeft, active, onChange, values }) => {
  return (
    <RadioWrapper>
      {values.map((item) => (
        <FlatBtnWrapper
          marginLeft={marginLeft}
          isActive={active === item}
          onClick={() => onChange(item)}
          key={item}
        >
          {item}
        </FlatBtnWrapper>
      ))}
    </RadioWrapper>
  );
};

export default Radio;

Radio.propTypes = {
  marginLeft: PropTypes.string,
  active: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.string),
};
