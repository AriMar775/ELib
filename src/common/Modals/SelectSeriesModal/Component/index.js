import React from "react";

import {
  ModalBgWrapper,
  ModalWrapper,
  Header,
  SeriesListWrapper,
  SeriesItem,
} from "./styles";

export const SelectSeriesModal = ({
  back,
  series,
  handleSeriesClick,
  handleClick,
  ...props
}) => {
  return (
    <ModalBgWrapper onClick={back}>
      <ModalWrapper>
        <Header>Выберите серию</Header>
        <SeriesListWrapper>
          {series.map((item) => (
            <SeriesItem key={item} onClick={() => handleSeriesClick(item)}>
              {item}
            </SeriesItem>
          ))}
        </SeriesListWrapper>
      </ModalWrapper>
      ;
    </ModalBgWrapper>
  );
};
