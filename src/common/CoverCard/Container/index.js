import React from "react";
import moment from "moment";
import "moment/locale/ru";
import { useLocation } from "react-router-dom";

import { CoverCard } from "../component";

const CoverCardContainer = ({
  series,
  category,
  cover,
  progressPercent,
  progressPages,
  releaseDate,
}) => {
  moment.locale("ru");
  let location = useLocation();

  const handleBlueBtnClick = () => {};

  return (
    <CoverCard
      location={location}
      series={series}
      category={category}
      cover={cover}
      progressPercent={progressPercent}
      progressPages={progressPages}
      releaseDate={releaseDate}
      onBlueBtnClick={handleBlueBtnClick}
    />
  );
};

export default CoverCardContainer;
