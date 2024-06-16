import { MouseEvent } from "react";

function ListGroup() {
  // we have changed const to let to enable us reset the list of items below to an empty array
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event Handler
  // in below typescript doesn't know the typeof event parameter even using a . after it wont show any properties thus we need to specify the type of our parameter so we get auto completion and type safety thus we import MouseEvent at top page
  // the below is called type annotation in typescript where we specify the type of our variable, parameters and so on
  const handleClick = (event: MouseEvent) => console.log(event)
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* below we are matching all items to item thus we can display each item in the onclick function */}
        {/* when mapping we can add a second parameter so when clicking an item we can see it's index */}
        {items.map((item, index) => (
          // in react each element has a property where prop called onclick
          // arrow function is a function with no parameters
          
          <li
            className="list-group-item"
            key={item}
            // below we are not calling the function handleClick() we just want to reference it thus we use handleClick
            // we are telling react that whenever a user clicks on this event onClick, the handleClick function get's called. Thus calling this function will be done later at runtime
            onClick = {handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
