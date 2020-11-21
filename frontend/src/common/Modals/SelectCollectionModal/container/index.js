import React, { useCallback } from "react";
import { change } from "redux-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SelectCollectionModal from "../component";
import { getCollections } from "../../../../redux/selectors";

const SelectCollectionModalContainer = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const collection = useSelector(getCollections);

  const back = useCallback(
    (e) => {
      e.stopPropagation();
      history.goBack();
    },
    [history]
  );

  const handleCollectionClick = useCallback(
    (value) => {
      dispatch(change("AddBookForm", "collection", value));
    },
    [dispatch]
  );

  return (
    <SelectCollectionModal
      back={back}
      collection={collection}
      handleCollectionClick={handleCollectionClick}
    />
  );
};

export default SelectCollectionModalContainer;
