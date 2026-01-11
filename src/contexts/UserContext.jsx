import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  const changeName = (newName) => {
    setUser({ ...user, name: newName });
  };

  return (
    <UserContext.Provider value={{ user, changeName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };