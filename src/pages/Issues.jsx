import React from 'react';
import IssuesList from '../components/IssuesList';
import LabelList from '../components/LabelList';
import { StatusSelect } from '../components/StatusSelect';

export default function Issues() {
  const [selectedLabels, setSelectedLabels] = React.useState([]);
  const [selectedStatus, setSelectedStatus] = React.useState('');

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={selectedLabels} status={selectedStatus} />
        </section>
        <aside>
          <LabelList
            selectedLabels={selectedLabels}
            onToggle={(label) => {
              setSelectedLabels((currentLabels) => {
                return currentLabels.includes(label)
                  ? currentLabels.filter((l) => l !== label)
                  : currentLabels.concat(label);
              });
            }}
          />

          <h3>Status</h3>

          <StatusSelect
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          />
        </aside>
      </main>
    </div>
  );
}
