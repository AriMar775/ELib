import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Nav from "../../../common/Nav/container";
import CoverCard from "../../../common/CoverCard/container";
import {
  HWrapper,
  VWrapper,
  Title,
  BlueTitle,
  SubTitle,
  TextAbout,
  Text,
  PlusWrapper,
  MinusWrapper,
  CommentWrapper,
  AdvWrapper,
  BtnWrapper,
  BtnBg,
  EditIcon,
  DeleteIcon,
} from "./styles";

const Book = ({
  category,
  cover,
  name,
  author,
  releaseDate,
  finishDate,
  bookSize,
  textSize,
  series,
  collection,
  annotation,
  advantages,
  disadvantages,
  comment,
  location,
  progressPercent,
  progressPages,
  onBlueBtnClick,
  ...props
}) => {
  return (
    <Nav>
      <BtnWrapper>
        <BtnBg>
          <EditIcon />
        </BtnBg>
        <BtnBg>
          <DeleteIcon />
        </BtnBg>
      </BtnWrapper>
      <HWrapper>
        {cover && (
          <CoverCard
            category={category}
            series={series}
            cover={cover}
            progressPercent={progressPercent}
            progressPages={progressPages}
            releaseDate={releaseDate}
          />
        )}

        <VWrapper>
          {name && <Title>{name}</Title>}
          <HWrapper>
            {author && (
              <>
                <SubTitle>Автор: </SubTitle>
                <TextAbout>{author}</TextAbout>
              </>
            )}
          </HWrapper>
          <HWrapper>
            {releaseDate && (
              <>
                <SubTitle>Дата выхода: </SubTitle>
                <TextAbout>{releaseDate}</TextAbout>
              </>
            )}
          </HWrapper>

          {finishDate && (
            <HWrapper>
              <SubTitle>Дата прочтения: </SubTitle>
              <TextAbout>{finishDate}</TextAbout>
            </HWrapper>
          )}

          {bookSize && (
            <HWrapper>
              <SubTitle>Объем: </SubTitle>
              <TextAbout>{bookSize} стр.</TextAbout>
            </HWrapper>
          )}

          {textSize && (
            <HWrapper>
              <SubTitle>Размер текста: </SubTitle>
              <TextAbout>{textSize}</TextAbout>
            </HWrapper>
          )}

          {collection && (
            <HWrapper>
              <SubTitle>Коллекция: </SubTitle>
              <Link
                to="/collections"
                style={{
                  textDecoration: "none",
                  marginTop: "-3px",
                  color: "#90BAF9",
                }}
              >
                <TextAbout>{collection}</TextAbout>
              </Link>
            </HWrapper>
          )}
          {annotation && <Text>{annotation}</Text>}
        </VWrapper>
      </HWrapper>
      <HWrapper>
        <VWrapper>
          {advantages && (
            <AdvWrapper>
              <PlusWrapper />
              <Text>{advantages}</Text>
            </AdvWrapper>
          )}

          {disadvantages && (
            <AdvWrapper>
              <MinusWrapper />
              <Text>{disadvantages}</Text>
            </AdvWrapper>
          )}
        </VWrapper>

        {comment && (
          <CommentWrapper>
            <BlueTitle>Комментарий</BlueTitle>
            <Text>{comment}</Text>
          </CommentWrapper>
        )}
      </HWrapper>
    </Nav>
  );
};

export default Book;

Book.propTypes = {
  category: PropTypes.string,
  cover: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  releaseDate: PropTypes.string,
  finishDate: PropTypes.string,
  bookSize: PropTypes.string,
  textSize: PropTypes.string,
  series: PropTypes.string,
  collection: PropTypes.string,
  annotation: PropTypes.string,
  advantages: PropTypes.string,
  disadvantages: PropTypes.string,
  comment: PropTypes.string,
  location: PropTypes.string,
  progressPercent: PropTypes.string,
  progressPages: PropTypes.string,
  onBlueBtnClick: PropTypes.func,
};
