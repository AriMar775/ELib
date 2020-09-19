import React from "react";
import { useSelector } from "react-redux";

import WillRead from "../Component";
import { getBooks } from "../../../redux/selectors";

const WillReadContainer = () => {
  const books = useSelector(getBooks);

  return <WillRead books={books} />;
};

export default WillReadContainer;
