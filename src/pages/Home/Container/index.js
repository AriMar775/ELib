import React from "react";
import { useSelector } from "react-redux";

import Home from "../Component";
import { getBooks } from "../../../redux/selectors";

const HomeContainer = () => {
  const books = useSelector(getBooks);

  return <Home books={books} />;
};

export default HomeContainer;
