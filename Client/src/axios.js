import axios from "axios";
export const makeRequest = axios.create({
  baseURL: "https://api.petfamily.click/api/",
  withCredentials: true,
});
export const makeRequestAuth = axios.create({
    baseURL: "https://auth.petfamily.click/",
    withCredentials: true,
  });

