import onChange from "on-change";
import initForm from "./form/controller.js";
import renderForm from "./form/view.js";

const initApp = () => {
  const state = {
    form: {
      status: "",
      error: ""
    },
    feeds: [],
    posts: []
  };

  const elements = {
    form: document.querySelector(".rss-form"),
    input: document.querySelector("#url-input"),
    feedback: document.querySelector(".feedback")
  };

  const watchedState = onChange(state, path => {
    if (path.startsWith("form")) {
      renderForm(state, elements);
    }
  });
  initForm(watchedState, elements);
};

export default initApp;
