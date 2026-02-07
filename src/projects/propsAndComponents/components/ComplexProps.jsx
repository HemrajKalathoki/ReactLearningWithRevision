import {useState} from "react";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-xl mt-3 lg:mt-5 ${theme.backgroundColor} ${theme.textColor}`}
    >
      <div className="flex items-center space-x-2 lg:space-x-4">
        <span
          className={`${theme.avatarBg} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-3xl md:text-4xl`}
        >
          {user.avatar}
        </span>
        <div className="flex flex-col">
          <span className="text-md lg:text-lg font-bold ">{user.name}</span>
          <span className="block text-sm lg:text-md">{user.email}</span>
          <div className="flex gap-1 mt-2">
            <span
              className={`${theme.badgeBg} px-3 py-1 rounded-full text-xs lg:text-md text-gray-900`}
            >
              {user.role}
            </span>
            <span
              className={`${theme.badgeBg} px-3 py-1 rounded-full text-xs lg:text-md text-gray-900`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>

      <hr className="my-3 text-gray-400" />

      {user.stats && (
        <div className="flex justify-around text-center">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="">
              <div className="text-md lg:text-2xl font-bold">
                {value}
              </div>
              <div className="capitalize text-xs lg:text-sm">{key}</div>
            </div>
          ))}
        </div>
      )}

        {actions && (
          <div className="flex gap-3 mt-4 justify-between">
            <button
              onClick={actions.primary.onClick }
              className={`${actions.primary.className} w-full transition-all duration-500 cursor-pointer scale-100 hover:scale-101 text-xs lg:text-lg`}
            >
              {actions.primary.label}
            </button>
            <button
              onClick={actions.secondary.onClick}
              className={`${actions.secondary.className} w-full transition-all duration-500 cursor-pointer scale-100 hover:scale-101`}
            >
              {actions.secondary.label}
            </button>
          </div> ) }
    </div>
  );
}

function ComplexProps() {
  const [message, setMessage] = useState("");
  const users = [
    {
      user: {
        name: "Hemraj Kalathoki",
        email: "hemraj.kalathoki3@gmail.com",
        avatar: "👨‍💻",
        role: "Software Engineer",
        status: "Active",
        stats: {
          posts: 240,
          followers: 5000,
          following: 300,
        },
      },

      theme: {
        backgroundColor: "bg-gradient-to-r from-purple-200 to-blue-200",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-300",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewed Profile"),
          className:
            "bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-xl",
        },

        secondary: {
          label: "Message",
          onClick: () => setMessage("Message"),
          className:
            "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-xl",
        },
      },
    },

    {
      user: {
        name: "Kalathoki",
        email: "hemraj.kalathoki3@gmail.com",
        avatar: "👦",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 120,
          commit: 5000,
          push: 300,
        },
      },

      theme: {
        backgroundColor: "bg-gradient-to-r from-green-200 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-300",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewed Profile"),
          className:
            "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl",
        },

        secondary: {
          label: "collaborate",
          onClick: () => setMessage("collaborate"),
          className:
            "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-xl",
        },
      },
    },
  ];

  return (
    <section className="bg-gray-50 p-3 lg:p-8 mt-5 rounded-lg">
      <h1 className="text-gray-800 text-xl lg:text-4xl font-bold">
        Complex Props/Nested Props
      </h1>
      <h3 className="mt-3 text-gray-800">
        Complex props allows you to pass nested objects and functions, enabling
        sophisticated component configurations and interactions
      </h3>
      <div>
        <h3 className="mt-3 text-gray-700 font-bold text-lg">
          User Profile Cards (Nested User, Theme, and Actions)
        </h3>
        <div className="grid lg:grid-cols-2 lg:gap-3">
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComplexProps;
