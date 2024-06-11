// import { Fragment } from "react";
// Fragment
function ListGroup() {
  // typescript uses className not just class
  return (
    // NB. A component cannot return more than 1 element thus need to wrap whole with a tag
    // it's best to use fragment.This helps ensure when this is rendered in 
    <>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </>
  );
}

export default ListGroup;
