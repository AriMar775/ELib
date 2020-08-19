import React from "react";

import { ModalBgWrapper, ModalWrapper, Header } from "./styles";

export const SeriesItemsModal = ({ back, series, ...props }) => {
  return (
    <ModalBgWrapper onClick={back}>
      <ModalWrapper>
        <Header>Название серии</Header>
      </ModalWrapper>
      ;
    </ModalBgWrapper>
  );
};
