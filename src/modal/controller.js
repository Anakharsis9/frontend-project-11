export default function initModal(state, elements) {
  const { modalEl } = elements.modal;
  if (!modalEl) return;

  modalEl.addEventListener('hidden.bs.modal', () => {
    state.ui.modalPostId = null;
  });
}
