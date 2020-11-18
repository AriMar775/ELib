import React, { useCallback } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/ru";
import { useLocation } from "react-router-dom";

import CoverCard from "../component";

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

  const handleBlueBtnClick = useCallback(() => {}, []);

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

CoverCardContainer.propTypes = {
  series: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string,
  cover: PropTypes.string,
  progressPercent: PropTypes.string,
  progressPages: PropTypes.string,
  releaseDate: PropTypes.string,
};
