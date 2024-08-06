import React from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}

 
class Field extends React.Component {
  render() {
    const holder = 'Enter here'
  const styledField = {
    width: '300px'
  }
  return <input
    type="text"
    placeholder={holder}
    style={styledField} />
}
  }


function Btn() {
  const text = 'Log in';

  const logged = false;

  // const res = () => {
  //   return 'Log in!'
  // }

  // const p = <p>Log in</p>

  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export {Header};
export default App;