import { useQuery } from 'react-query';

export function useIssuesData({ labels, status }) {
  return useQuery(['issues', { labels, status }], () => {
    const queryString = labels.map((l) => `labels[]=${l}`).join('&');
    const statusString = status ? `&status=${status}` : '';

    return fetch(`/api/issues?${queryString}${statusString}`).then((res) => {
      if (res.status !== 200) {
        throw new Error('Error getting issues');
      }

      return res.json();
    });
  });
}
