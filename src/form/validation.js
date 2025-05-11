import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'errors.required',
    notOneOf: 'errors.duplicate',
  },
  string: {
    url: 'errors.invalidUrl',
  },
})

export const buildSchema = (existingUrls = []) =>
  yup.string().trim().required().url().notOneOf(existingUrls)

export const validateUrl = (url, existingUrls) => {
  const schema = buildSchema(existingUrls)
  return schema
    .validate(url)
    .then(() => ({ valid: true }))
    .catch(error => ({ valid: false, message: error.message }))
}
