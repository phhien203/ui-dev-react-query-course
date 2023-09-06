import React from 'react';
import IssuesList from '../components/IssuesList';
import LabelList from '../components/LabelList';

export default function Issues() {
  const [selectedLabels, setSelectedLabels] = React.useState([]);

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={selectedLabels} />
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
        </aside>
      </main>
    </div>
  );
}
