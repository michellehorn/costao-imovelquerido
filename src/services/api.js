import axios from "axios";

const api = axios.create({
  baseURL: "http://187.33.21.33:3510",
});

export { api };
