import { CheckListItem } from "./App";

interface Props {
  items: CheckListItem[];
}

function Checklist({ items }: Props) {
  const listItems = items.map(item => {
    return (
      <li
        className={item.isComplete ? 'is-complete': ''}
        key={item.id}
      >
        {item.description}
      </li>
    )
  });

  return (
    <ol>
      {listItems}
    </ol>
  )
}

export default Checklist;