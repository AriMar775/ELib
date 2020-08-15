import React from "react";

import { InputItem, Cover, Border, ImageWrapper } from "./styles";

export const InputFile = ({ input, srcValue, onChange }) => {
  return (
    <Cover>
      {srcValue ? <ImageWrapper src={srcValue} alt="Обложка" /> : <Border />}
      <InputItem type="file" onChange={onChange} {...input} />
    </Cover>
  );
};
