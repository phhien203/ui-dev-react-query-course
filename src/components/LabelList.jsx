import { useLabelsData } from '../hooks/useLabelsData';

export default function LabelList({ selectedLabels, onToggle }) {
  const labelsQuery = useLabelsData();

  return (
    <div className="labels">
      <h3>Labels</h3>

      {labelsQuery.isLoading && <p>Loading...</p>}
      {labelsQuery.isError && <p>{labelsQuery.error.message}</p>}

      {labelsQuery.isSuccess && (
        <ul>
          {labelsQuery.data.map((label) => (
            <li key={label.id}>
              <button
                className={`label ${label.color} ${
                  selectedLabels.includes(label.name) ? 'selected' : ''
                }`}
                onClick={() => onToggle(label.name)}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
