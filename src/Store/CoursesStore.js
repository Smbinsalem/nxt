import { makeAutoObservable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

class CoursesStore {
  courses = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  // functions
  fetchCourses = async () => {
    try {
      const response = await instance.get("/course");
      console.log("fetchCourses -> response", response);
      this.courses = response.data;
      this.loading = false;
    } catch (error) {
      console.error("CoursesStore -> fetchCourses -> error", error);
    }
  };
  deleteCourse = async (courseId) => {
    try {
      await instance.delete(`/course/${courseId}`);
      this.courses = this.courses.filter((course) => course.id !== +courseId);
    } catch (error) {
      console.log("CourseStore -> deleteCourse -> error", error);
    }
  };

  updateCourse = async (courseUpdate) => {
    try {
      await instance.put(`/course/${courseUpdate.id}`, courseUpdate);
      const course = this.courses.find(
        (course) => course.id === courseUpdate.id
      );
      for (const key in course) course[key] = courseUpdate[key];
    } catch (error) {
      console.log("CourseStore -> updateCourse -> error", error);
    }
  };

  createCourse = async (newCourse) => {
    try {
      const res = await instance.post("/course", newCourse);
      console.log("CourseStore -> createCourse -> res", res);
      this.courses.push(res.data);
    } catch (error) {
      console.log("CourseStore -> createCourse -> error", error);
    }
  };
}

const CoursesStore = new CoursesStore();
coursesStore.fetchCourses();
export default coursesStore;
