import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import { AppWrapper } from "./styles";
import Routes from "./navigation";

function App() {
  const history = useHistory();
  return (
    <Router history={history}>
      <AppWrapper>
        <Routes />
      </AppWrapper>
    </Router>
  );
}

export default App;
