import React, { useState } from "react";

const LocalStorage = () => {
  const [input, setInput] = useState("");
  const [dataList, setDataList] = useState(
    JSON.parse(localStorage.getItem("myData")) || []
  );
  const handleAddData = () => {
    if (input.trim() === "") return;
    let updatedList = [...dataList, input];
    setDataList(updatedList);
    localStorage.setItem("myData", JSON.stringify(updatedList));
    setInput("");
  };

  return (
    <div>
      <h1>Local Storage</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter data here...."
      />
      <button onClick={handleAddData}>Add</button>
      <p>Local Storage Value : {input}</p>
      <ul>
        {" "}
        {dataList.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorage;
