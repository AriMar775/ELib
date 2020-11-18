import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home/container";
import Book from "../pages/Book/container";
import AddBook from "../pages/AddBook/container";
import SelectSeriesModal from "../common/Modals/SelectSeriesModal/container";
import SelectCollectionModal from "../common/Modals/SelectCollectionModal/container";
import SeriesItemsModal from "../common/Modals/SeriesItemsModal/container";
import WasRead from "../pages/WasRead/container";
import Reading from "../pages/Reading/container";
import WillRead from "../pages/WillRead/container";
import WaitingForRelease from "../pages/WaitingForRelease/container";

const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/home" component={Home} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/add-book" component={AddBook} />
        <Route exact path="/was-read" component={WasRead} />
        <Route exact path="/reading" component={Reading} />
        <Route exact path="/will-read" component={WillRead} />
        <Route
          exact
          path="/waiting-for-release"
          component={WaitingForRelease}
        />
        <Route component={NotFound} />
      </Switch>
      {background && (
        <>
          <Route path="/select-series-modal" component={SelectSeriesModal} />
          <Route
            path="/select-collections-modal"
            component={SelectCollectionModal}
          />
          <Route path="/series-items-modal" component={SeriesItemsModal} />
        </>
      )}
    </>
  );
};

export default Routes;
