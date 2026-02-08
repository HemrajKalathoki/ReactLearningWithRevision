import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    px-6 py-2 rounded-lg transition-all duration-300
    ${size === "small" ? "text-sm px-2 py-1" : ""}
    ${size === "large" ? "text-lg px-8 py-3" : ""}
    ${color === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
    ${color === "secondary" ? "bg-gray-500 text-white hover:bg-gray-600" : ""}
    ${color === "success" ? "bg-green-500 text-white hover:bg-green-600" : ""}
    ${color === "danger" ? "bg-red-500 text-white hover:bg-red-600" : ""}

    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="bg-white p-8 rounded-lg space-y-4 shadow-2xl">
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">Basic Props</h2>
      <p className="text-gray-800">
        Basic Props are the most common type of props used in React. They allow you to pass simple values like strings, numbers, booleans, and functions to components. These props can be used to customize the behavior and appearance of components.
      </p>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-700">Different Colors</h3>
        <div className="flex flex-wrap lg:gap-4 gap-2">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
         
          <Button
            text="Click me!"
            color="primary"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Disabled Button"
            color="secondary"
            disabled
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Small Danger"
            color="danger"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Large Primary"
            color="primary"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-700">Different Sizes</h3>
        <div className="flex flex-wrap gap-4">
          <Button
            text="small"
            color="primary"
            size={"small"}
            onClick={() => setClickCount((prev) => prev + 1)}
          />
         
          <Button
            text="Click me!"
            color="secondary"
            size={"large"}
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Disabled Button"
            color="secondary"
            disabled
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Small Danger"
            color="danger"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
          <Button
            text="Large Primary"
            color="primary"
            onClick={() => setClickCount((prev) => prev + 1)}
          />
        </div>

        <div className="bg-sky-100 text-lg mt-5 p-4 rounded-lg">
          <p className="font-2xl font-medium text-gray-700">
            Button clicked <span className="font-bold text-blue-400">{clickCount}</span> times  
          </p>
        </div>
      </div>
    </section>
  );
}

export default BasicProps;
