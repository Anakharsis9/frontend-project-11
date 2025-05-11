import { v4 as uuidv4 } from 'uuid';

export default function normalizeData(
  parsedData,
  originalUrl,
  feedId = uuidv4(),
) {
  const feed = {
    id: feedId,
    url: originalUrl,
    title: parsedData.feed.title,
    description: parsedData.feed.description,
  };

  const posts = parsedData.posts.map((post) => ({
    id: uuidv4(),
    feedId,
    title: post.title,
    link: post.link,
    description: post.description,
  }));

  return { feed, posts };
}
