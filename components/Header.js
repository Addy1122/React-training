import React,{useState} from "react";

const element = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello, world!'),
    React.createElement('p', null, 'This is a paragraph.')
  );

const Header = () => {
    const [state,setState] = useState(0)

    return (
      <div>
        <Title title="Welcome to My React App" />
        <button onClick={()=>setState(state+1)}>Click me</button>
        <div>{state}</div>
        <Content message="This is a simple React app." />
        {element}
      </div>
    );
  };
  
  const Title = (props) => {
    return <h1>{props.title}</h1>;
  };
  
  const Content = (props) => {
    return <p>{props.message}</p>;
  };
  
export default Header