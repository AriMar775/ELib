import React from "react";
import PropTypes from "prop-types";

import {
  ModalBgWrapper,
  ModalWrapper,
  Header,
  SeriesListWrapper,
  SeriesItem,
} from "./styles";

const SelectSeriesModal = ({
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

export default SelectSeriesModal;

SelectSeriesModal.propTypes = {
  back: PropTypes.func,
  series: PropTypes.arrayOf(PropTypes.string),
  handleSeriesClick: PropTypes.func,
  handleClick: PropTypes.func,
};
