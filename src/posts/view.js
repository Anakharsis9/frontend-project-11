import i18next from 'i18next'

export default function renderPosts(posts, ui, elements) {
  const container = elements.postsContainer
  container.innerHTML = ''

  if (posts.length === 0) return

  const card = document.createElement('div')
  card.classList.add('card', 'border-0')

  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')

  const title = document.createElement('h2')
  title.classList.add('card-title', 'h4')
  title.textContent = i18next.t('postsTitle')

  cardBody.appendChild(title)
  card.appendChild(cardBody)

  const list = document.createElement('ul')
  list.classList.add('list-group', 'border-0', 'rounded-0')

  posts.forEach((post) => {
    const item = document.createElement('li')
    item.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-start',
      'border-0',
      'border-end-0',
    )

    const link = document.createElement('a')
    link.setAttribute('href', post.link)
    link.setAttribute('target', '_blank')
    link.setAttribute('rel', 'noopener noreferrer')
    link.setAttribute('data-id', post.id)
    link.textContent = post.title

    const isViewed = ui.viewedPostIds.includes(post.id)
    link.classList.add(isViewed ? ('fw-normal', 'link-secondary') : 'fw-bold')

    const button = document.createElement('button')
    button.classList.add('btn', 'btn-outline-primary', 'btn-sm')
    button.setAttribute('type', 'button')
    button.setAttribute('data-id', post.id)
    button.setAttribute('data-bs-toggle', 'modal')
    button.setAttribute('data-bs-target', '#modal')
    button.textContent = i18next.t('btn.show')

    item.appendChild(link)
    item.appendChild(button)
    list.appendChild(item)
  })

  card.appendChild(list)
  container.appendChild(card)
}
