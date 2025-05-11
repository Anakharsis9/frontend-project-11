import onChange from "on-change";
import i18next from 'i18next';


const renderError = (elements, message) => {
  elements.input.classList.add("is-invalid");
  elements.feedback.textContent = i18next.t(message);
  elements.feedback.classList.remove("text-success");
  elements.feedback.classList.add("text-danger");
};

const clearError = elements => {
  elements.input.classList.remove("is-invalid");
  elements.feedback.textContent = "";
};

export const initView = (state, elements) => {
  return onChange(state, function (path, value) {
    if (path === "form.error") {
      renderError(elements, value);
    }

    if (path === "form.status") {
      switch (value) {
        case "invalid":
          break;
        case "valid":
          clearError(elements);
          break;
        case "submitted":
          elements.form.reset();
          elements.input.focus();
          clearError(elements);
          break;
        default:
          break;
      }
    }
  });
};
