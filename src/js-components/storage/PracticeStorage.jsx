import React, { useState } from "react";

const PracticeStorage = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("userData"));
    } catch (error) {
      console.log("Error in getting data from local storage", error);
      return [];
    }
  });
  const addData = () => {
    if (userInput.trim("") === "") return;
    let updatedData = [...list, userInput];
    setList(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserInput("");
  };
  const removeData = (index) => {
    let filteredData = list.filter((_, i) => i != index);

    console.log("Removed data", filteredData);

    localStorage.setItem("userData", JSON.stringify(filteredData));
    setList(filteredData);
  };
  return (
    <div>
      <input
        type="text"
        value={userInput}
        placeholder="Add your data here"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={addData}>Add Data to Storage</button>
      <ol>
        {list.length > 0 ? (
          list.map((data, index) => (
            <div key={index}>
              <li>{data} </li>
              <button onClick={() => removeData(index)}>Remove Data</button>
            </div>
          ))
        ) : (
          <li>There is no Data to Display</li>
        )}
      </ol>
    </div>
  );
};

export default PracticeStorage;
