import { FormEventHandler, useState } from "react";
import type { CheckListItem } from "./App"

interface Props {
  id: string;
  onSubmit(newItem: CheckListItem): void;
}

function CheckListItemForm({ id, onSubmit }: Props) {
  const [descr, setDescr] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const newItem: CheckListItem = {
      id,
      description: descr,
      isComplete: false,
    };

    onSubmit(newItem);
    setDescr('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        value={descr}
        onChange={({ target: { value } }) => setDescr(value)}
      />

      <button type="submit">Save</button>
    </form>
  )
}

export default CheckListItemForm;