// Rules for Hooks:

// Component file name and function name should be same

// Component file name and function name first letter should be uppercase PascalCase (not camelCase)

// Always write hooks inside component or function

// Do not call hooks inside loops, conditions or nested functions


import React, { useState } from 'react';

function ChangetextHook() {
  const [myName, setNewNameFunction] = useState('Subscribe to Sarthak Haldar');

  const changeText = () => {
    setNewNameFunction((prevName) =>
      prevName === 'Subscribe to Sarthak Haldar'
        ? 'Thank you for subscribing'
        : 'Subscribe to Sarthak Haldar'
    );
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeText}>Click me</button>
    </div>
  );
}

export default ChangetextHook;
