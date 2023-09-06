import { useQuery } from 'react-query';

export function useLabelsData() {
  return useQuery(['labels'], () => {
    return fetch(`/api/labels`).then((res) => {
      if (res.status !== 200) {
        throw new Error('Error getting labels');
      }
      return res.json();
    });
  });
}
