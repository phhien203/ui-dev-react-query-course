import { GoComment, GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { relativeDate } from '../helpers/relativeDate';
import { useUserData } from '../hooks/useUserData';

export function IssueItem({
  title,
  number,
  assignee,
  commentCount,
  createdDate,
  createdBy,
  labels,
  status,
}) {
  const createdByUserQuery = useUserData(createdBy);
  const assigneeUserQuery = useUserData(assignee);

  return (
    <li>
      <div>
        {status === 'done' || status === 'cancelled' ? (
          <GoIssueClosed style={{ color: 'red' }} />
        ) : (
          <GoIssueOpened style={{ color: 'green' }} />
        )}
      </div>

      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => (
            <span key={label} className={'label red'}>
              {label}
            </span>
          ))}
        </span>

        <small>
          #{number} opened {relativeDate(createdDate)}{' '}
          {createdByUserQuery?.isSuccess &&
            `by ${createdByUserQuery.data.name}`}
        </small>
      </div>

      {assigneeUserQuery.isSuccess && (
        <img
          className="assigned-to"
          alt={`${assigneeUserQuery.data.name}'s avatar`}
          src={assigneeUserQuery.data.profilePictureUrl}
        />
      )}

      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}
