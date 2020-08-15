import React from "react";

import { WhiteBtnWrapper } from "./styles.js";

const WhiteBtn = ({ width, height, onClick, children }) => {
  return (
    <WhiteBtnWrapper width={width} height={height} onClick={onClick}>
      {children}
    </WhiteBtnWrapper>
  );
};

export default WhiteBtn;
