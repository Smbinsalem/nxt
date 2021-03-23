import { makeAutoObservable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

class UniversityStore {
  universities = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  // functions
  fetchUniversity = async () => {
    try {
      const response = await instance.get("/university");
      console.log("fetchUniversity -> response", response);
      this.universities = response.data;
      this.loading = false;
    } catch (error) {
      console.error("UniversityStore -> fetchUniversity -> error", error);
    }
  };
  deleteUniversity = async (universityId) => {
    try {
      await instance.delete(`/university/${universityId}`);
      this.universities = this.universities.filter(
        (university) => university.id !== +universityId
      );
    } catch (error) {
      console.log("UniversityStore -> deleteUniversity -> error", error);
    }
  };

  updateUniversity = async (universityUpdate) => {
    try {
      await instance.put(
        `/university/${universityUpdate.id}`,
        universityUpdate
      );
      const university = this.universities.find(
        (university) => university.id === universityUpdate.id
      );
      for (const key in university) university[key] = universityUpdate[key];
    } catch (error) {
      console.log("UniversityStore -> updateUniversity -> error", error);
    }
  };

  createUniversity = async (newUniversity) => {
    try {
      const res = await instance.post("/university", newUniversity);
      console.log("UniversityStore -> createUniversity -> res", res);
      this.universities.push(res.data);
    } catch (error) {
      console.log("UniversityStore -> createUniversity -> error", error);
    }
  };
}

const universityStore = new UniversityStore();
universityStore.fetchUniversity();
export default universityStore;
