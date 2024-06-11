// first we need to import our message component to be able to use it in main app
import Message from './Message';

function App(){
  // we use message component in our app component.We add it just ike a normal tag
  // <Message></Message> or <Message/> are the same
  return <div><Message/></div>
}

// just like the message component we should export the app component
export default App;