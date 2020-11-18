import React from "react";
import PropTypes from "prop-types";

import {
  ModalBgWrapper,
  ModalWrapper,
  Header,
  CollectionListWrapper,
  CollectionItem,
} from "./styles";
import SelectSeriesModal from "../../SelectSeriesModal/component";

const SelectCollectionModal = ({
  back,
  collection,
  handleCollectionClick,
  handleClick,
  ...props
}) => {
  return (
    <ModalBgWrapper onClick={back}>
      <ModalWrapper>
        <Header>Выберите серию</Header>
        <CollectionListWrapper>
          {collection.map((item) => (
            <CollectionItem
              key={item}
              onClick={() => handleCollectionClick(item)}
            >
              {item}
            </CollectionItem>
          ))}
        </CollectionListWrapper>
      </ModalWrapper>
      ;
    </ModalBgWrapper>
  );
};

export default SelectSeriesModal;

SelectCollectionModal.propTypes = {
  back: PropTypes.func,
  series: PropTypes.arrayOf(PropTypes.string),
  handleSeriesClick: PropTypes.func,
  handleClick: PropTypes.func,
};
