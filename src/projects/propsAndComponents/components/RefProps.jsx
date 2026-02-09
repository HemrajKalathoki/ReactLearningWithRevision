import { useRef, forwardRef } from "react";
import { Card } from "./ChildrenProps";

//Input component that accepts a ref prop and forwards it to the input element
const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`text-gray-800 w-full lg:w-1/2 px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current === null || inputRef.current.value === "") {
      alert("Input is empty");
    } else {
      alert(`Input Value: ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  return (
    <section className="bg-gray-100 px-3 md:px-6 sm:px-4 py-8 lg:p-8 rounded-xl shadow-md mt-5">
      <h2 className="text-gray-800 text-5xl font-bold">Ref Props</h2>
      <p className="text-gray-800 py-1">
        Refs provide a way to access DOM nodes or React elements directly. Use{" "}
        <span className="bg-gray-200 px-1 rounded-lg">FowardRef</span> to pass
        refs to child components.
      </p>

      <div className="bg-blue-200 p-4 rounded-lg mb-5">
        <h3 className="text-lg text-gray-800 font-semibold py-2">Try it out</h3>
        <CustomInput
          ref={inputRef}
          label="First Input with ref"
          placeholder="Type something here..."
        />

        <CustomInput
          ref={secondInputRef}
          label="Second Input with ref"
          placeholder="Type something here..."
        />

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={focusInput}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl  transition-all duration-300 hover:scale-101"
          >
            Focus first input
          </button>

          <button
            onClick={focusSecondInput}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-xl  transition-all duration-300 hover:scale-101"
          >
            Focus second input
          </button>

          <button
            onClick={getInputValue}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-101"
          >
            Get First Input Value
          </button>

          <button
            onClick={clearInput}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-101"
          >
            Clear Input
          </button>
        </div>
      </div>

      <Card title="Note" color="yellow">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            When to use refs:{" "}
          </h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>Accessing DOM elements directly (e.g., focusing an input)</li>
            <li>Managing focus, text selection, or media playback</li>
            <li>Integrating with third-party DOM libraries</li>
            <li>Storing mutable values that don't trigger re-renders</li>
          </ul>
        </div>
      </Card>
    </section>
  );
}

export default RefProps;
