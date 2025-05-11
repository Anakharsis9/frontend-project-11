import axios from "axios";
import parse from "./parser.js";

const API_PROXY_URL = "https://allorigins.hexlet.app";

export default function fetchRss(url) {
  return axios
    .get(
      `${API_PROXY_URL}/get?disableCache=true&url=${encodeURIComponent(url)}`
    )
    .then(response => {
      try {
        return parse(response.data.contents);
      } catch {
        const err = new Error("errors.invalidRss");
        err.name = "ParserError";
        throw err;
      }
    })
    .catch(error => {
      if (error.name === "ParserError") {
        throw error;
      }

      const err = new Error("errors.network");
      err.name = "NetworkError";
      throw err;
    });
}
