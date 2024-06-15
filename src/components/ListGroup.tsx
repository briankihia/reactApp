function ListGroup() {
  // we have changed const to let to enable us reset the list of items below to an empty array
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // sometimes we wanna render different content based on certain conditions
  // if (items.length === 0)
  //   return (
  //     <>
  //       {" "}
  //       <h1>list</h1>
  //       <p>No item found</p>{" "}
  //     </>
  //   );

  // in the above code, it works but there is a lot of duplication thus we are going to render things conditionally inside our jsx expression
  return (
    <>
      <h1>List</h1>
      {/* inside here we cannot write an if statement because as stated earlier , here we can only use html elements or other react components but the only exception is braces, with braces we can render anything dynamically*/}
      {items.length === 0 ? <p>No item found</p>: null }

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
