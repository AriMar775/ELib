import React from "react";
import moment from "moment";
import "moment/locale/ru";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Book } from "../Component";
import { getBooks } from "../../../redux/selectors";

const BookContainer = () => {
  moment.locale("ru");
  let location = useLocation();

  const book = useSelector(getBooks)[0];

  const handleBlueBtnClick = () => {};

  return (
    <Book
      location={location}
      category={book.category}
      cover={book.cover}
      name={book.name}
      author={book.author}
      releaseDate={moment(book.releaseDate).format("LL")}
      finishDate={moment(book.finishDate).format("LL")}
      bookSize={book.bookSize}
      textSize={book.textSize}
      series={book.series}
      collection={book.collection}
      annotation={book.annotation}
      advantages={book.advantages}
      disadvantages={book.disadvantages}
      comment={book.comment}
      progressPercent={book.progressPercent}
      progressPages={book.progressPages}
      onBlueBtnClic={handleBlueBtnClick}
    />
  );
};

export default BookContainer;