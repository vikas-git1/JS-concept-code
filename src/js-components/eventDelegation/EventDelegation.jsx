import React, { useState } from "react";

const EventDelegation = () => {
  const [actions] = useState([
    { id: 1, label: "Edit" },
    { id: 2, label: "Delete" },
    { id: 3, label: "Share" },
    { id: 4, label: "Download" },
  ]);
  const handleClick = (e) => {
    if (e.target.tagName === "Li") {
      alert(`${e.target.value} List clicked`);
      console.log("List", e.target.value);
    }
  };
  return (
    <ul onClick={handleClick}>
      {actions.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
};

export default EventDelegation;
