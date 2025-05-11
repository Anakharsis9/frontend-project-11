import i18next from 'i18next'

export default function renderFeeds(feeds, elements) {
  const container = elements.feedsContainer
  container.innerHTML = ''

  if (feeds.length === 0) return

  const card = document.createElement('div')
  card.classList.add('card', 'border-0')

  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')

  const title = document.createElement('h2')
  title.classList.add('card-title', 'h4')
  title.textContent = i18next.t('feedsTitle')

  cardBody.appendChild(title)
  card.appendChild(cardBody)

  const list = document.createElement('ul')
  list.classList.add('list-group', 'border-0', 'rounded-0')

  feeds.forEach((feed) => {
    const item = document.createElement('li')
    item.classList.add('list-group-item', 'border-0', 'border-end-0')

    const feedTitle = document.createElement('h3')
    feedTitle.classList.add('h6', 'm-0')
    feedTitle.textContent = feed.title

    const feedDesc = document.createElement('p')
    feedDesc.classList.add('m-0', 'small', 'text-black-50')
    feedDesc.textContent = feed.description

    item.appendChild(feedTitle)
    item.appendChild(feedDesc)
    list.appendChild(item)
  })

  card.appendChild(list)
  container.appendChild(card)
}
