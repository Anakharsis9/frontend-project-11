export default function initPosts(state, elements) {
  elements.postsContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-id]');
    if (!button) return;

    const postId = button.dataset.id;

    if (!state.ui.viewedPostIds.includes(postId)) {
      state.ui.viewedPostIds.push(postId);
    }

    state.ui.modalPostId = postId;
    state.ui.modalInstance.show();
  });
}
