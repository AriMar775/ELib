import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { SeriesItemsModal } from "../component";
import { getSeries } from "../../../../redux/selectors";

const SeriesItemsModalContainer = () => {
  let history = useHistory();

  const series = useSelector(getSeries);

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return <SeriesItemsModal back={back} series={series} />;
};

export default SeriesItemsModalContainer;
