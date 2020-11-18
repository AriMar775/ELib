import React from "react";
import PropTypes from "prop-types";

import { WhiteBtnWrapper } from "./styles.js";

const WhiteBtn = ({ width, height, onClick, children }) => {
  return (
    <WhiteBtnWrapper width={width} height={height} onClick={onClick}>
      {children}
    </WhiteBtnWrapper>
  );
};

export default WhiteBtn;

WhiteBtn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};
