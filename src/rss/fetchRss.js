import axios from "axios";
import parse from "./parser.js";

const API_PROXY_URL = "https://allorigins.hexlet.app";

export default function fetchRss(url) {
  return axios
    .get(
      `${API_PROXY_URL}/get?disableCache=true&url=${encodeURIComponent(url)}`
    )
    .then(response => parse(response.data.contents));
}
