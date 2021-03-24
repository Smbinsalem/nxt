import React from "react";
import courseStore from "../../Store/CourseStore";
import { observer } from "mobx-react";

const CoursePage = () => {
  return courseStore.courses.map((course) => {
    return (
      <>
        <p>{course.name}</p>
        <p>{course.country}</p>
      </>
    );
  });
};

export default observer(CoursePage);
