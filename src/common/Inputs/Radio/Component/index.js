import React from "react";

import { RadioWrapper, FlatBtnWrapper } from "./styles.js";

export const Radio = ({ marginLeft, active, onChange, values }) => {
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
