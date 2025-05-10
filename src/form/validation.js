import * as yup from "yup";

export const buildSchema = (existingUrls = []) =>
  yup
    .string()
    .trim()
    .required("URL обязателен")
    .url("Ссылка должна быть валидным URL")
    .notOneOf(existingUrls, "RSS уже существует");

export const validateUrl = (url, existingUrls) => {
  const schema = buildSchema(existingUrls);

  return schema
    .validate(url)
    .then(() => ({ valid: true }))
    .catch(error => ({ valid: false, message: error.message }));
};
