import { useQuery } from 'react-query';

export function useUserData(userId) {
  return useQuery(
    ['users', userId],
    () => {
      return fetch(`/api/users/${userId}`).then((res) => {
        if (res.status !== 200) {
          throw new Error('Error getting user data');
        }
        return res.json();
      });
    },
    { enabled: !!userId }
  );
}
