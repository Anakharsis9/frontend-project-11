import onChange from 'on-change'

import { Modal } from 'bootstrap'
import initForm from '@/form/controller.js'
import initFeeds from '@/feeds/controller.js'
import initPosts from '@/posts/controller.js'
import initModal from '@/modal/controller.js'

import renderForm from '@/form/view.js'
import renderFeeds from '@/feeds/view.js'
import renderPosts from '@/posts/view.js'
import renderModal from '@/modal/view.js'

const initApp = () => {
  const state = {
    form: {
      status: '',
      error: '',
    },
    feeds: [],
    posts: [],
    ui: {
      viewedPostIds: [],
      modalPostId: null,
      modalInstance: null,
    },
  }

  const elements = {
    form: document.querySelector('.rss-form'),
    input: document.querySelector('#url-input'),
    feedback: document.querySelector('.feedback'),
    feedsContainer: document.querySelector('.feeds'),
    postsContainer: document.querySelector('.posts'),
    modal: {
      modalEl: document.getElementById('modal'),
      title: document.querySelector('.modal .modal-title'),
      body: document.querySelector('.modal .modal-body'),
      link: document.querySelector('.modal .full-article'),
      closeBtn: document.querySelector('.modal .close'),
    },
  }

  state.ui.modalInstance = new Modal(elements.modal.modalEl)

  const watchedState = onChange(state, (path) => {
    if (path.startsWith('form')) {
      renderForm(state, elements)
    }
    if (path === 'feeds') {
      renderFeeds(state.feeds, elements)
    }
    if (path === 'posts' || path === 'ui.viewedPostIds') {
      renderPosts(state.posts, state.ui, elements)
    }
    if (path === 'ui.modalPostId') {
      renderModal(state, elements)
    }
  })

  initForm(watchedState, elements)
  initFeeds(watchedState)
  initPosts(watchedState, elements)
  initModal(watchedState, elements)
}

export default initApp
