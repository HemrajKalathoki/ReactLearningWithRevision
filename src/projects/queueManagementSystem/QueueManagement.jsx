import React from "react";
import QueueForm from "./components/QueueForm";
import DisplayComponent from "./components/DisplayComponent";
import { useState } from "react";

function QueueManagement() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    // add data to queue
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };

  const updateStatus = (id, newStatus) => {
    // change data's status in queue
    setQueue(
      queue.map((customer) => 
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };

  const removeFromQueue = (id) => {
    // remove data from queue
    setQueue(queue.filter((customer) => customer.id !== id)); // filter return a new array with all queue except the one with matching id
  };

  return (
    <div className="bg-gray-900 mt-4 rounded-xl py-[20px] text-center">
      <div>
        <h1 className="font-bold text-2xl text-indigo-500">
          Queue Management System
        </h1>
        <p className="text-gray-500 text-sm">
          Manage your customers efficiently
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5 px-5 mx-auto pb-[30px]">
        <QueueForm onAddCustomer={addToQueue} />

        <DisplayComponent
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </div>
    </div>
  );
}

export default QueueManagement;
