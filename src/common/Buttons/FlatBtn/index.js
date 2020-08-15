import React from "react";

import { FlatBtnWrapper } from "./styles.js";

const FlatBtn = ({ width, children, onClick }) => {
  return (
    <FlatBtnWrapper width={width} onClick={onClick}>
      {children}
    </FlatBtnWrapper>
  );
};

export default FlatBtn;
