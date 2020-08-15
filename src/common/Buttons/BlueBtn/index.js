import React from "react";

import { BlueBtnWrapper } from "./styles.js";

const BlueBtn = ({ width, height, children }) => {
  return (
    <BlueBtnWrapper width={width} height={height}>
      {children}
    </BlueBtnWrapper>
  );
};

export default BlueBtn;
