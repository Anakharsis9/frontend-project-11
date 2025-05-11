export default function parse(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  const parseError = xmlDoc.querySelector('parsererror');
  if (parseError) {
    throw new Error('Parsing error');
  }

  const feedTitle = xmlDoc.querySelector('channel > title')?.textContent;
  const feedDescription = xmlDoc.querySelector(
    'channel > description',
  )?.textContent;

  const feed = {
    title: feedTitle,
    description: feedDescription,
  };

  const items = xmlDoc.querySelectorAll('item');
  const posts = Array.from(items).map((item) => ({
    title: item.querySelector('title')?.textContent,
    link: item.querySelector('link')?.textContent,
    description: item.querySelector('description')?.textContent,
  }));

  return { feed, posts };
}
