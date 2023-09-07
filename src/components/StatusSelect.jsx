import React from 'react';

const statusOptions = [
  {
    id: 'done',
    label: 'Done',
  },
  {
    id: 'inProgress',
    label: 'In progress',
  },
  {
    id: 'cancelled',
    label: 'Cancelled',
  },
  {
    id: 'todo',
    label: 'Todo',
  },
  {
    id: 'backlog',
    label: 'Backlog',
  },
];
export function StatusSelect({ value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="status-select">
      <option value="">Select a status</option>
      {statusOptions.map((status) => (
        <option key={status.id} value={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
