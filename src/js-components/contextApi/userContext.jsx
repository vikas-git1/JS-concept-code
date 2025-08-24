import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("Vikas");
  console.log("User in Context API", user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserDetail = () => useContext(UserContext);
