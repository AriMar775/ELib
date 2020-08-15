import React from "react";

import { CardWrapper } from "./styles";

const Card = ({ width, height, children }) => {
  return (
    <CardWrapper width={width} height={height}>
      {children}
    </CardWrapper>
  );
};

export default Card;
