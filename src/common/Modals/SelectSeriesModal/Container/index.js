import React from "react";
import { change } from "redux-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { SelectSeriesModal } from "../Component";
import { getSeries } from "../../../../redux/selectors";

const SelectSeriesModalContainer = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const series = useSelector(getSeries);

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const handleSeriesClick = (value) => {
    dispatch(change("AddBookForm", "series", value));
  };

  return (
    <SelectSeriesModal
      back={back}
      series={series}
      handleSeriesClick={handleSeriesClick}
    />
  );
};

export default SelectSeriesModalContainer;
