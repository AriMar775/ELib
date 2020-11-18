import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../../Card";

import {
  CardWrapper,
  ImageWrapper,
  SeriesWrapper,
  ReadWrapper,
  PercentReadWrapper,
  PagesReadWrapper,
  NumberWrapper,
  EditNumberIcon,
  BlueBtnWrapper,
} from "./styles";

const CoverCard = ({
  location,
  series,
  category,
  cover,
  progressPercent,
  progressPages,
  releaseDate,
  onBlueBtnClick,
}) => {
  return (
    <CardWrapper>
      <Card width="238px" minHeight="312px">
        <Link
          to={{
            pathname: "/series-items-modal",
            state: { background: location },
          }}
          style={{ textDecoration: "none" }}
        >
          {series && <SeriesWrapper>{series} (N/N)</SeriesWrapper>}
        </Link>
        <ImageWrapper src={cover} />
        {category === "Читаю" && (
          <ReadWrapper>
            <NumberWrapper>
              {progressPercent && (
                <PercentReadWrapper>{progressPercent} %</PercentReadWrapper>
              )}
              {progressPages && (
                <PagesReadWrapper>{progressPages} / 1152 стр.</PagesReadWrapper>
              )}
            </NumberWrapper>
            <EditNumberIcon />
          </ReadWrapper>
        )}
        {category === "Жду выхода" && releaseDate && (
          <PagesReadWrapper>{releaseDate}</PagesReadWrapper>
        )}
        {category === "Буду читать" && (
          <BlueBtnWrapper onClick={onBlueBtnClick}>
            Начать читать
          </BlueBtnWrapper>
        )}
      </Card>
    </CardWrapper>
  );
};

export default CoverCard;

CoverCard.propTypes = {
  location: PropTypes.object,
  series: PropTypes.string,
  category: PropTypes.string,
  cover: PropTypes.string,
  progressPercent: PropTypes.string,
  progressPages: PropTypes.string,
  releaseDate: PropTypes.string,
  onBlueBtnClick: PropTypes.func,
};
