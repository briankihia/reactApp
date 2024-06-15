function ListGroup() {
  // we have changed const to let to enable us reset the list of items below to an empty array
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // better way to use the if statement is to conclude it here and then  just call it in our return 
  // there are 2 ways we can do this , by using a constant or by using a function
  
  // const message =  items.length === 0 ? <p>No item found</p> : null;

  // The good thing about using a function in this case is that our functions can have parameters thus we can have different messages depending on different conditions
  const getMessage = () => {
    return  items.length === 0 ? <p>No item found</p> : null;
  }
 
  return (
    <>
      <h1>List</h1>
      
      {/* {message} */}
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
