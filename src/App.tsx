// first we need to import our message component to be able to use it in main app
// import Message from './Message';
import ListGroup from "./components/ListGroup";

function App(){
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // we use message component in our app component.We add it just ike a normal tag
  // <Message></Message> or <Message/> are the same
  // in cities below we did not use braces because we are passing static data
  return <div><ListGroup items= {items} heading="Cities"/></div>
}

// just like the message component we should export the app component
export default App;