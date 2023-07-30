import React, { useState } from 'react';

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
};





import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
