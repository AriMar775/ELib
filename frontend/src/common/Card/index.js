import React from "react";
import PropTypes from "prop-types";

import { CardWrapper } from "./styles";

const Card = ({ width, height, minHeight, children }) => {
  return (
    <CardWrapper width={width} height={height} minHeight={minHeight}>
      {children}
    </CardWrapper>
  );
};

export default Card;

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
};
