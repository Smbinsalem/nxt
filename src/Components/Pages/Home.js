import React from "react";
import Listing from "../University";
import Showbar from "../Showbar";
import { UniversityData, afterGradCourses } from "../University/UniversityList";

function HomePage() {
  return (
    <>
      <Listing heading="Choose your university" data={UniversityData} />
      <Showbar />
      <Listing
        heading="after Graduation courses for You"
        data={afterGradCourses}
      />
    </>
  );
}

export default HomePage;
