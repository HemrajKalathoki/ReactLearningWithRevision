import React from "react";
import { useState } from "react";
import {FaUserPlus} from "react-icons/fa";

function QueueForm({ onAddCustomer }) {
  const [name, setName] = useState("");
  const [serviceType, setServiceType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload while submitting the form

    // validation checks
    if (!name.trim() || !serviceType.trim()) {
      return;
    }

    onAddCustomer({ name, serviceType });
    setName("");
    setServiceType("");
  };

  return (
    <>
      <div className="bg-zinc-800 rounded-lg py-3 w-1/3 h-fit">
        <form className="py-4 px-4" onSubmit={handleSubmit}>
          <h1 className="text-indigo-500 text-2xl font-bold text-left">Add to Queue</h1>

          <div className="relative mt-4 max-w-full">
            <input
              className="bg-gray-900 rounded w-full text-gray-400 px-2 text-lg py-1 focus:outline-indigo-500"
              placeholder="Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>

          <div className="relative mt-2 max-w-full">
            <select
              className="appearance-none w-full bg-gray-900 rounded-lg text-gray-200 px-2 text-lg py-1 focus:outline-indigo-500"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="">Select Service Type</option>
              <option value="Website Development">Website Development</option>
              <option value="Web App">Web App</option>
              <option value="Mobile App">Mobile App</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              ▼
            </span>
          </div>

          <button className="flex items-center bg-indigo-500 w-full justify-center text-white mt-4 py-3 rounded-lg hover:bg-indigo-700">
            <FaUserPlus className="mr-2"/>
            Add Customer
          </button>

        </form>
      </div>
    </>
  );
}

export default QueueForm;
