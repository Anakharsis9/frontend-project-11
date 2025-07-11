import i18next from 'i18next'

const renderError = ({ input, feedback }, message) => {
  input.classList.add('is-invalid')
  feedback.textContent = i18next.t(message)
  feedback.classList.remove('text-success')
  feedback.classList.add('text-danger')
}
const renderSuccess = ({ feedback }) => {
  feedback.textContent = i18next.t('successLoad')
  feedback.classList.add('text-success')
}

const clearError = ({ input, feedback }) => {
  input.classList.remove('is-invalid')
  feedback.textContent = ''
  feedback.classList.remove('text-danger')
}

export default function renderForm(state, elements) {
  const { input, form } = elements
  const { status, error } = state.form

  switch (status) {
    case 'invalid':
      renderError(elements, error)
      break

    case 'valid':
      clearError(elements)
      break

    case 'submitted':
      form.reset()
      input.focus()
      clearError(elements)
      renderSuccess(elements)
      break

    default:
      break
  }
}
