import React from "react";
import { change } from "redux-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { SelectCollectionModal } from "../Component";
import { getCollections } from "../../../../redux/selectors";

const SelectCollectionModalContainer = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const collection = useSelector(getCollections);

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const handleCollectionClick = (value) => {
    dispatch(change("AddBookForm", "collection", value));
  };

  return (
    <SelectCollectionModal
      back={back}
      collection={collection}
      handleCollectionClick={handleCollectionClick}
    />
  );
};

export default SelectCollectionModalContainer;
