import React, { useContext, useState } from "react";
import { UserContext, useUserDetail } from "./userContext";
const Display = () => {
  //   const { user, setUser } = useContext(UserContext);
  const { user, setUser } = useUserDetail();
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setUserInput(value);
    setUser(value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <h1>Hellow, {user}</h1>
    </div>
  );
};

export default Display;
