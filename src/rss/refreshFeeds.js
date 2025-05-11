import fetchRss from './fetchRss.js'
import normalizeData from './normalize.js'

export default function refreshFeeds(state) {
  const tasks = state.feeds.map(feed =>
    fetchRss(feed.url)
      .then((rawData) => {
        const { posts } = normalizeData(rawData, feed.url, feed.id)
        const existingLinks = state.posts.map(post => post.link)
        const newPosts = posts.filter(post => !existingLinks.includes(post.link))

        if (newPosts.length > 0) {
          state.posts = [...newPosts, ...state.posts,]
        }
      })
      .catch(() => {})
  )

  return Promise.all(tasks)
}
