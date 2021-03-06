import React from "react";
import { useSelector } from "react-redux";

import WasRead from "../component";
import { getBooks } from "../../../redux/selectors";

const WasReadContainer = () => {
  const books = useSelector(getBooks);

  return <WasRead books={books} />;
};

export default WasReadContainer;
