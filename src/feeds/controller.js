import refreshFeeds from '@/rss/refreshFeeds.js';

const POLL_INTERVAL = 5000;

export default function initFeeds(state) {
  const scheduleFeedUpdates = () => {
    refreshFeeds(state).finally(() => setTimeout(scheduleFeedUpdates, POLL_INTERVAL));
  };

  setTimeout(scheduleFeedUpdates, POLL_INTERVAL);
}
