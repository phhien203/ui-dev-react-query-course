import { useQuery } from 'react-query';

import { IssueItem } from './IssueItem';

export default function IssuesList({ labels, status }) {
  const issuesQuery = useQuery(['issues', { labels, status }], () => {
    const queryString = labels.map((l) => `labels[]=${l}`).join('&');
    const statusString = status ? `&status=${status}` : '';

    return fetch(`/api/issues?${queryString}${statusString}`).then((res) => {
      if (res.status !== 200) {
        throw new Error('Error getting issues');
      }

      return res.json();
    });
  });

  return (
    <div>
      <h1>Issues List</h1>

      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {issuesQuery.data.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              commentCount={issue.comments.length}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
              labels={issue.labels}
              status={issue.status}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
