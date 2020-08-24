import React from "react";

import { CardWrapper } from "./styles";

const Card = ({ width, height, minHeight, children }) => {
  return (
    <CardWrapper width={width} height={height} minHeight={minHeight}>
      {children}
    </CardWrapper>
  );
};

export default Card;
