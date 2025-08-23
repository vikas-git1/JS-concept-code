import React, { useState } from "react";

const SessionsStorage = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("myData")) || [];
    } catch (error) {
      return console.log("Error in parsing jason data", error);
    }
  });
  const handleAddData = () => {
    if (userInput.trim() === "") return;
    let updatedList = [...list, userInput];
    setList(updatedList);
    sessionStorage.setItem("myData", JSON.stringify(updatedList));
    setUserInput("");
  };
  return (
    <div>
      <h1>Session Storage</h1>
      <input
        type="text"
        value={userInput}
        placeholder="Add Data to store...."
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>User Input: {userInput}</p>
      <button onClick={handleAddData}>Add</button>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default SessionsStorage;
