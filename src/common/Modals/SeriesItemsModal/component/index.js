import React from "react";
import PropTypes from "prop-types";

import { ModalBgWrapper, ModalWrapper, Header } from "./styles";

const SeriesItemsModal = ({ back, series, ...props }) => {
  return (
    <ModalBgWrapper onClick={back}>
      <ModalWrapper>
        <Header>Название серии</Header>
      </ModalWrapper>
      ;
    </ModalBgWrapper>
  );
};

SeriesItemsModal.propTypes = {
  back: PropTypes.func,
  series: PropTypes.arrayOf(PropTypes.string),
};
export default SeriesItemsModal;
