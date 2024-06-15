function ListGroup() {
  // we have changed const to let to enable us reset the list of items below to an empty array
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

 
 
  return (
    <>
      <h1>List</h1>
      
      {/* { items.length === 0 ? <p>No item found</p> : null} */}
      {/* in below if our entire condition is true we will return the second part of our condition but if false it just returns false */}
      {/* this helps remove the null part */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
