
function ListGroup() {
    // now we work on how to render dynamic data list

    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    // in javascript arrays have a method called map for mapping or converting each item to an item of a different type
    // here we want to convert each item to an item of an li element
    // in JSX we use curly braces to render data dynamically and here we are rendering the item itself
    items.map(item => <li>{item}</li>)
  return (
   
    <>
        <h1>List</h1>
        {/* in jsx we don't have a for loop thus cant use it here */}
        <ul className="list-group">
          {/* in JSX we can only use html or any other react components thus we need to change for the below expression*/}
          {/* items.map(item => <li>{item}</li>) */}
          {/* to render the above expression dynamically we need to wrap it in braces */}
          {/* each item above should have a unique key to identify it. This helps react know what part of the page should be updated  when an item is added or deleted*/}
          {/* in this case each item is a unique string thus we can use the item itself as a unique key but in a real world application where we retrieve items from an api quite often each item has a property like id eg item.id , we dont have it in this case so we don't have o worry about it*/}
          { items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
