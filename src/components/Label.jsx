import { useLabelsData } from '../hooks/useLabelsData';

export function Label({ label }) {
  const labelsQuery = useLabelsData();

  if (labelsQuery.isLoading || labelsQuery.isError) return null;

  const labelObject = labelsQuery.data.find((l) => l.id === label);

  if (!labelObject) return null;

  return (
    <span className={`label ${labelObject.color}`}>{labelObject.name}</span>
  );
}
