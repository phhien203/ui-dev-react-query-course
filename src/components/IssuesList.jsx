import { IssueItem } from './IssueItem';
import { useIssuesData } from '../hooks/useIssuesData';

export default function IssuesList({ labels, status }) {
  const issuesQuery = useIssuesData({ labels, status });

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
