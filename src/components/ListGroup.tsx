interface props {
  items: string[];
  heading: string;
  // let's define the signature of our new function
  // we imagine that we want a function that takes a parameter called item of type string that is the selected item and returns void(doesn't return a value)
  // (item: string) => void
  // we start with on then select the type of event
  // onSelectItem is a property of type function that has a parameter of type string and returns void
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

// below where we have items, heading we had prop but we use it this way to avoid repetitiveness by adding prop. before items and heading word and can be used anywhere in that fun
function ListGroup({ items, heading, onSelectItem }: props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// when we select an item we wil call the below function and thus notifying our app component

export default ListGroup;
