import { validateUrl } from "./validation.js";
import fetchRss from "@/rss/fetchRss.js";
import normalizeData from "@/rss/normalize.js";

export default function initForm(state, elements) {
  elements.form.addEventListener("submit", e => {
    e.preventDefault();
    const url = elements.input.value;
    const existingUrls = state.feeds.map(feed => feed.url);

    validateUrl(url, existingUrls)
      .then(({ valid, message }) => {
        if (!valid) {
          Object.assign(state.form, { error: message, status: "invalid" });
          return Promise.resolve();
        }

        state.form.status = "valid";

        return fetchRss(url);
      })
      .then(rawData => {
        if (!rawData) return;

        const { feed, posts } = normalizeData(rawData, url);

        state.feeds = [feed, ...state.feeds];
        state.posts = [...posts, ...state.posts];
        state.form.status = "submitted";
      })
      .catch(error => {
        Object.assign(state.form, {
          error: error.message,
          status: "invalid"
        });
      });
  });
}
