import React, { useState } from "react";
import universityStore from "./Store/UniversityStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalstyle";
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer";
import HomePage from "./Components/Pages/Home";
import UniversityPage from "./Components/Pages/Uni";
import UniversityDetail from "./Components/Buttons/UniversityDetail";

function App() {
  const [university, setUniversity] = useState(null);

  const selectUniversity = (universityId) => {
    const selectedUniversity = universityStore.universities.find(
      (university) => university.id === universityId
    );
    setUniversity(selectedUniversity);
  };
  return (
    <Router>
      <GlobalStyle />
      <Wrapper />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/universities/:universityId">
          <UniversityDetail selectUniversity={selectUniversity} />
        </Route>
        <Route path="/universities">
          <UniversityPage selectUniversity={selectUniversity} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
