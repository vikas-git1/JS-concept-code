import React, { useEffect, useState } from "react";

const Debounce = () => {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => setDebouncedValue(input), 500);
    return () => clearTimeout(timeout);
  }, [input]);
  return (
    <div>
      <h1>Debounce</h1>
      <input
        type="text"
        value={input}
        placeholder="Type something..."
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Input value: {input} </p>
      <p>Debounce value:{debouncedValue} </p>
    </div>
  );
};

export default Debounce;
