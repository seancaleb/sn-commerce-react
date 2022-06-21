import axios from "axios";

export default axios.create({
  baseURL: "https://api.chec.io/v1/",
  headers: {
    "Content-type": "application/json",
    "X-Authorization": import.meta.env.VITE_COMMERCEJS_API_KEY,
  },
});
