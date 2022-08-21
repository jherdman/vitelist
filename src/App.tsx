import { useState, useSyncExternalStore } from 'react';
import './App.css'
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
    <div className="App">
      <Checklist items={items} />
      <CheckListItemForm id={nextId} onSubmit={publishItem} />
    </div>
  )
}

export default App
