import onChange from "on-change";
import initForm from "@/form/controller.js";
import initFeeds from "@/feeds/controller.js";
import renderForm from "@/form/view.js";
import renderFeeds from "@/feeds/view.js";
import renderPosts from "@/posts/view.js";

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
    feedback: document.querySelector(".feedback"),
    feedsContainer: document.querySelector(".feeds"),
    postsContainer: document.querySelector(".posts")
  };

  const watchedState = onChange(state, path => {
    if (path.startsWith("form")) {
      renderForm(state, elements);
    }
    if (path === "feeds") {
      renderFeeds(state.feeds, elements);
    }
    if (path === "posts") {
      renderPosts(state.posts, elements);
    }
  });

  initForm(watchedState, elements);
  initFeeds(watchedState);
};

export default initApp;
