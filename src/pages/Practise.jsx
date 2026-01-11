// @ts-ignore
import { useContext, useRef } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Students() {
  const inputRef = useRef(null); // initialize useRef
  const { user, changeName } = useContext(UserContext); // useContext to access global state

  console.log("user", user);

  const handleClick = () => {
    console.log('inputRef', inputRef.current);
    if (inputRef.current.value.trim() === "") return;
    changeName(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
      <p className="mb-2">
        <span className="font-semibold">Current User:</span> {user.name} (
        {user.age} yrs)
      </p>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter new name"
        className="border border-gray-300 p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Name
      </button>
    </div>
  );
}
