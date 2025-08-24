import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form Submitted: User Name: ${userNameRef.current.value}, User Email: ${userEmailRef.current.value}, User Password: ${userPasswordRef.current.value}`
    );
  };

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
        <h1>Uncontrolled Form</h1>
      </div>
      <div>
        <label htmlFor="userName">Enter Name:</label>
        <input
          type="text"
          placeholder="Enter Full Name...."
          id="userName"
          ref={userNameRef}
        />
      </div>
      <div>
        <label htmlFor="email">Enter Email:</label>
        <input
          type="email"
          placeholder="Enter Email...."
          id="email"
          ref={userEmailRef}
        />
      </div>
      <div>
        <label htmlFor="password">Enter Password:</label>
        <input
          type="password"
          placeholder="Enter Password...."
          id="password"
          ref={userPasswordRef}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UncontrolledComponent;
