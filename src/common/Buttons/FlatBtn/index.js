import React from "react";
import PropTypes from "prop-types";

import { FlatBtnWrapper } from "./styles.js";

const FlatBtn = ({ width, children, onClick }) => {
  return (
    <FlatBtnWrapper width={width} onClick={onClick}>
      {children}
    </FlatBtnWrapper>
  );
};

export default FlatBtn;

FlatBtn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};
