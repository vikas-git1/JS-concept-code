import React, { useState } from "react";

const ControlledComponent = () => {
  const [formData, setForm] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      userName: "",
      userEmail: "",
      userPassword: "",
    });
    alert(`Form submitted: Name: ${formData.userName}`);
  };
  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("Form Input", formData);

  return (
    <form
      style={{
        height: "60vh",
        width: "40vw",
        margin: "auto",
        border: "2px solid black",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <h1>Controlled Form</h1>
      </div>
      <div>
        <label htmlFor="userName">Enter Name:</label>
        <input
          type="text"
          placeholder="Enter Full Name...."
          value={formData.userName}
          id="userName"
          name="userName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Enter Email:</label>
        <input
          type="email"
          placeholder="Enter Email...."
          value={formData.userEmail}
          id="email"
          name="userEmail"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Enter Password:</label>
        <input
          type="password"
          placeholder="Enter Password...."
          value={formData.userPassword}
          id="password"
          name="userPassword"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ControlledComponent;
