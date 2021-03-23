import React from "react";
import universityStore from "../../Store/UniversityStore";
import { observer } from "mobx-react";

const UniPage = () => {
  return universityStore.universities.map((university) => {
    return (
      <>
        <p>{university.name}</p>
        <p>{university.country}</p>
      </>
    );
  });
};

export default observer(UniPage);
