import React from "react";

import {
  ModalBgWrapper,
  ModalWrapper,
  Header,
  CollectionListWrapper,
  CollectionItem,
} from "./styles";

export const SelectCollectionModal = ({
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
