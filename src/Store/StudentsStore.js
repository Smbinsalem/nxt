import { makeAutoObservable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

class StudentsStore {
  students = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  // functions
  fetchStudents = async () => {
    try {
      const response = await instance.get("/student");
      console.log("fetchStudents -> response", response);
      this.students = response.data;
      this.loading = false;
    } catch (error) {
      console.error("StudentsStore -> fetchStudents -> error", error);
    }
  };
  deleteStudent = async (studentId) => {
    try {
      await instance.delete(`/student/${studentId}`);
      this.students = this.students.filter(
        (student) => student.id !== +studentId
      );
    } catch (error) {
      console.log("StudentStore -> deleteStudent -> error", error);
    }
  };

  updateStudent = async (studentUpdate) => {
    try {
      await instance.put(`/student/${studentUpdate.id}`, studentUpdate);
      const student = this.students.find(
        (student) => student.id === studentUpdate.id
      );
      for (const key in student) student[key] = studentUpdate[key];
    } catch (error) {
      console.log("StudentStore -> updateStudent -> error", error);
    }
  };

  createStudent = async (newStudent) => {
    try {
      const res = await instance.post("/student", newStudent);
      console.log("studentStore -> createstudent -> res", res);
      this.students.push(res.data);
    } catch (error) {
      console.log("StudentStore -> createStudent -> error", error);
    }
  };
}

const StudentsStore = new StudentsStore();
studentsStore.fetchStudents();
export default studentsStore;
