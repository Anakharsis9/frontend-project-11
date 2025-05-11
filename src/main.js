import "./scss/styles.scss";
import i18next from "i18next";
import resources from "./locales/index.js";

import { validateUrl } from "./form/validation.js";
import { initView } from "./form/view.js";

const state = {
  form: {
    status: "",
    error: ""
  },
  feeds: [
    // {
    //   url: "https://rss.app/feeds/ZK5FsFLtmGML7cAf.xml"
    // }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  i18next
    .init({
      lng: "ru",
      debug: false,
      resources
    })
    .then(() => {
      const elements = {
        form: document.querySelector(".rss-form"),
        input: document.querySelector("#url-input"),
        feedback: document.querySelector(".feedback")
      };

      const watchedState = initView(state, elements);

      elements.form.addEventListener("submit", e => {
        e.preventDefault();
        const url = elements.input.value;
        const existingUrls = state.feeds.map(feed => feed.url);

        validateUrl(url, existingUrls).then(({ valid, message }) => {
          if (!valid) {
            watchedState.form.error = message;
            watchedState.form.status = "invalid";
            return;
          }

          watchedState.feeds.push({ url });
          watchedState.form.status = "submitted";
        });
      });
    });
});
