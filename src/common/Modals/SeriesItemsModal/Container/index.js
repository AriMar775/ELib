import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import SeriesItemsModal from "../component";
import { getSeries } from "../../../../redux/selectors";

const SeriesItemsModalContainer = () => {
  let history = useHistory();

  const series = useSelector(getSeries);

  const back = useCallback(
    (e) => {
      e.stopPropagation();
      history.goBack();
    },
    [history]
  );

  return <SeriesItemsModal back={back} series={series} />;
};

export default SeriesItemsModalContainer;
