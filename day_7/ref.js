import React, { useRef, useEffect } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field on component mount
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};
