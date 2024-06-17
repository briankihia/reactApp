
interface props{
  // above can also be written as ListGroupProps ie. fixing it with the name of the component
  // using braces we define various properties and their types
  // we use type annotation to specify type of various properties
  items: string[];
  heading: string;
}

import { useState } from "react";

// below where we have items, heading we had prop but we use it this way to avoid repetitiveness by adding prop. before items and heading word and can be used anywhere in that fun
function ListGroup({items, heading}: props) {
  // we have changed const to let to enable us reset the list of items below to an empty array
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // instead of defining the items above there, we should be able to pass them as an input to this component
  // the same way we can call a function and give it an argument.The same applies to the heading of list

 
  const [selectedIndex, setSelectedIndex] = useState(-1);
 
  return (
    <>
    {/* instead of hard coding the below label there, it would be nicer if you could pass different labels like cities , names etc */}
    {/* to do that first we need to decide the shape of the input to this component */}
    {/* thus we should be able to pass an object with 2 properties*/}
    {/* 1. items which is going to be an array and heading which is going to be a string . To do this we use one of typescript feature called an interface */}
    {/* using an interface we can define the shape or the interface of an object */}
    {/* below we add the heading dynamically */}
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        
        {items.map((item, index) => (
         
          <li
          
            className= {selectedIndex === index? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick = {()=>{setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
