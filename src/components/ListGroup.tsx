import { useState } from "react";

function ListGroup() {
  // we have changed const to let to enable us reset the list of items below to an empty array
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];


  // the below function is called a hook(a function that allows us to tap into built in features in react)
  // using useState we can tell react that this component can have data or state that will change overtime
  // useState(-1) return an array 
  // in this array we will have 2 elements
  // 1. a variable like our selectedIndex variable
  // 2. updater function(using the updater function we can update the first variable and by this react will be notified and it knows the state of our component is changing thus it will re-render our component)
  // const arr = useState(-1);
  // arr[0]
  // arr[1]
  // rather than doing above we do like below
  // selectedIndex is the stateVariable and setSElectedIndex is a function
  // -1 below is just a default value
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // we use state hook to declare another variable called name. that is the idea
  // const [name, setName]= useState('');
  // one thing to know about component state is that each component is going to have it's own state thus if you go back to app component and add another instance of ListGroup, each list group is going to have it's own state
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        
        {items.map((item, index) => (
         
          <li
          // when we click an item we want to highlight it thus we add a bootstrap class that does that called active
          // but we dont want to highlight all at once thus to do that we need a variable to keep track of the index of the selected item
          // below we want to render the active class dynamically so
            // className="list-group-item active"
            // here we have done such that if our selectedIndex is the current one we apply the following classes otherwise if not we just give it the list-group-item
            className= {selectedIndex === index? 'list-group-item active' : 'list-group-item'}
            key={item}
           
            // in below we have written a simple error function which sets selected index to the index of the current item
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
