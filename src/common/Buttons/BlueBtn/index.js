import React from "react";
import PropTypes from "prop-types";

import { BlueBtnWrapper } from "./styles.js";

const BlueBtn = ({ width, height, children }) => {
  return (
    <BlueBtnWrapper width={width} height={height}>
      {children}
    </BlueBtnWrapper>
  );
};

export default BlueBtn;

BlueBtn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};
