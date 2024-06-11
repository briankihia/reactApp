// there are 2 ways to create a react component
// 1.javascript class or function
// function based components are better

// below is pascal casing, capitalizing first letter of every word
function Message() {
    // we describe what the UI is going to look like where we use  this component
    // below is JSX:Javascript XML
    return <h1>Hello World</h1>;

}

// to use the above component we need to export it as a default object for this module
export default Message;
// after we go to our app component(App.tsx) and use this new component
