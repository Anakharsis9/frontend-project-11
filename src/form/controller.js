import { validateUrl } from "./validation.js";

export default function initForm(state, elements) {
  elements.form.addEventListener("submit", e => {
    e.preventDefault();
    const url = elements.input.value;
    const existingUrls = state.feeds.map(feed => feed.url);

    validateUrl(url, existingUrls).then(({ valid, message }) => {
      if (!valid) {
        Object.assign(state.form, { error: message, status: "invalid" });
        return;
      }

      state.feeds.push({ url });
      state.form.status = "submitted";
    });
  });
}
