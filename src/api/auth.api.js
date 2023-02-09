import { API, BASE_URL } from "./constants.api";

export const authApi = {
  // {
  //    username: "abcd",
  //    password: "abcdef"
  // }
  login: (data) => API.post(`${BASE_URL}/auth/login`, data),
  register: (data) => API.post(`${BASE_URL}/auth/users`, data),
};
