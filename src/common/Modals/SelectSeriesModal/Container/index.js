import React, { useCallback } from "react";
import { change } from "redux-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SelectSeriesModal from "../component";
import { getSeries } from "../../../../redux/selectors";

const SelectSeriesModalContainer = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const series = useSelector(getSeries);

  const back = useCallback(
    (e) => {
      e.stopPropagation();
      history.goBack();
    },
    [history]
  );

  const handleSeriesClick = useCallback(
    (value) => {
      dispatch(change("AddBookForm", "series", value));
    },
    [dispatch]
  );

  return (
    <SelectSeriesModal
      back={back}
      series={series}
      handleSeriesClick={handleSeriesClick}
    />
  );
};

export default SelectSeriesModalContainer;
