import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  params: {
    api_key: "YOUR_API_KEY",
    language: "en-US",
    page: 1,
  },
})

export default Api;