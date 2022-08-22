import { useState } from 'react';
import Checklist from './Checklist'
import CheckListItemForm from './CheckListItemForm';

export interface CheckListItem {
  id: string;
  description: string;
  isComplete: boolean;
}

function App() {
  const [items, setItem] = useState<CheckListItem[]>([]);
  const [nextId, setNextId] = useState('1');

  function getNextId() {
    return (Number.parseInt(nextId) + 1).toString();
  }

  function publishItem(newItem: CheckListItem) {
    setItem([newItem, ...items]);
    setNextId(getNextId());
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <h1
        className="text-2xl font-sans font-bold text-slate-800 pb-4"
      >
        My checklist
      </h1>

      <Checklist items={items} />

      <CheckListItemForm id={nextId} onSubmit={publishItem} />
    </div>
  )
}

export default App
