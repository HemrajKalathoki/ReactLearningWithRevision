import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(63);

  return (
    <>
      <div className="bg-gray-900 rounded-xl py-5 mt-5 text-center">
        <h1 className="text-white font-bold text-2xl">Counter</h1>
        <div className="card text-white font-semibold my-4">Count is {counter}</div>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-black text-white rounded-md px-4 h-10"
            onClick={() => setCounter(counter + 1)}
          >
            Increase
          </button>

          <button
            className="bg-black text-white rounded-md px-4 h-10"
            onClick={() => setCounter(() => Math.max(0, counter - 1))}
          >
            Decrease
          </button>

          <button
            className="bg-red-600 text-white rounded-md px-4 h-10"
            onClick={() => setCounter(0)}
          >
            Reset
          </button>
        </div>

        <div className="my-10 flex gap-4 justify-center items-center">
          <input
            className="rounded text-white h-8"
            style={{
              width: "200px",
              border: "1px solid white",
              margin: "20px 0",
              padding: "2px 5px",
            }}
            value={inputValue}
            type="text"
            onChange={(event) => setInputValue(Number(event.target.value))}
          />

          <button
            className="bg-cyan-400 text-white rounded-md px-4 h-8"
            onClick={() => {
              setCounter(Number(inputValue));
              setInputValue(0); // Clear input field after setting the counter
            }}
          >
            Set as {inputValue}
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
