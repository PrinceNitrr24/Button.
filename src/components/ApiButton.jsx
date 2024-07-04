import React from "react";
import axios from "axios";

const ApiButton = () => {
  const handleClick = async () => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <div>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded "
          onClick={handleClick}
        >
          Button
        </button>
      </div>
    </>
  );
};

export default ApiButton;
