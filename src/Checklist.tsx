import { CheckListItem } from "./App";

interface Props {
  items: CheckListItem[];
}

function Checklist({ items }: Props) {
  if (items.length > 0) {
    return <PopulatedCheckList items={items} />
  } else {
    return <EmptyCheckList />
  }
}

function PopulatedCheckList({ items }: Props) {
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

function EmptyCheckList() {
  return <p>Nothing in your checklist yet</p>
}

export default Checklist;