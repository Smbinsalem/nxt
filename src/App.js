import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalstyle";
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer";
import HomePage from "./Components/Pages/Home";
import UniPage from "./Components/Pages/Uni";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/universities">
          <UniPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
