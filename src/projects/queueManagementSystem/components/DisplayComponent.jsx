import React from "react";

function DisplayComponent({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "text-yellow-500";
      case "serving":
        return "text-blue-500";
      case "completed":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <>
      <div className="bg-zinc-800 rounded-lg py-5 md:col-span-2">
        <h1 className="text-gray-50 text-xl font-bold text-left pl-5 mb-3">
          Current Queue
        </h1>

        {queue.length === 0 ? (
          <p className="justify-center text-gray-400 mt-10">No Customer Data</p>
        ) : (
          <div className="list px-5">
            {queue.map((customer) => (
              <div
                key={customer.id}
                className="flex justify-between items-center bg-gray-900 mt-2 p-4 rounded-lg"
              >
                <div className=" text-left">
                  <h3 className="text-gray-50 font-semibold">
                    {customer.name}
                  </h3>
                  <p className="text-gray-400">
                    Service: {customer.serviceType}
                  </p>
                  <span className={getStatusColor(customer.status)}>
                    {customer.status}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row gap-2 mt-2">
                  {customer.status === "waiting" && (
                    <button
                      className="bg-blue-500 text-white px-3 py-1 max-h-fit rounded hover:bg-blue-700"
                      onClick={() => onUpdateStatus(customer.id, "serving")}
                    >
                      Serve
                    </button>
                  )}
                  {customer.status === "serving" && (
                    <button
                      className="bg-green-500 text-white px-3 max-h-fit py-1 rounded hover:bg-green-700"
                      onClick={() => onUpdateStatus(customer.id, "completed")}
                    >
                      Complete
                    </button>
                  )}
                  <button
                    className="bg-red-500 text-white px-3 max-h-fit py-1 rounded hover:bg-red-700"
                    onClick={() => onRemove(customer.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default DisplayComponent;
