export default function renderModal(state, elements) {
  const postId = state.ui.modalPostId
  const post = state.posts.find(p => p.id === postId)
  if (!post) return

  elements.modal.title.textContent = post.title
  elements.modal.body.textContent = post.description
  elements.modal.link.href = post.link
}
