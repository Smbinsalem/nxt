import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalstyle";
import Wrapper from "./Components/Wrapper";
import Listing from "./Components/University";
import {
  UniversityData,
  afterGradCourses,
} from "./Components/University/UniversityList";
import Showbar from "./Components/Showbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper />
      <Listing heading="Choose your university" data={UniversityData} />
      <Showbar />
      <Listing
        heading="after Graduation courses for You"
        data={afterGradCourses}
      />
      <Footer />
    </Router>
  );
}

export default App;
