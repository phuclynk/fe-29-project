import axios from "axios";

export const BASE_URL = "http://localhost:3050/api";

export const API = {
  get: (url) => axios.get(url),
  post: (url, data) => axios.post(url, data),
  patch: (url, id, data) => axios.patch(`${url}/${id}`, data),
  delete: (url, id) => axios.delete(`${url}/${id}`),
};

// get
// localhost:3003/product
// localhost:3003/product/537984578

// post
// localhost:3003/product
// payload = {
//  name: '',
//  price: 10,
//
// }

// patch
// localhost:3003/product
// payload = {
//  price: 7,
// }

// patch
// localhost:3003/product/438985745
