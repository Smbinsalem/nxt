import React from "react";
import { ShowbarContainer, ShowbarButton } from "./Showbar";

const Showbar = () => {
  return (
    <ShowbarContainer>
      <h1>Be the winner of the month</h1>
      <p>
        By registering today you get the chance to be our lucky winner by
        getting registered for 2 more courses
      </p>
      <ShowbarButton>let's get in there</ShowbarButton>
    </ShowbarContainer>
  );
};

export default Showbar;
