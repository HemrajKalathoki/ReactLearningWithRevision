import React from "react";

import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import RefProps from "./components/RefProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;

  const sections = [
    {
      id: "basic",
      label: "Basic Props",
      icon: "📦",
    },
    {
      id: "children",
      label: "Children Props",
      icon: "👶",
    },
    {
      id: "ref",
      label: "Ref Props",
      icon: "🔖",
    },
    {
      id: "complex",
      label: "Complex Props",
      icon: "🧸",
    },
    {
      id: "theme",
      label: "theme Props",
      icon: "🎨",
    },
  ];

  return (
    <nav className={`sticky z-50 shadow-md text-center pt-1`}>
      <div>
        <div>
          {sections.map((section) => (
            <button
              type="button"
              key={section.id}
              className={`relative group px-4 py-2 rounded-3xl font-medium bg-sky-600 text-white my-2 mx-4 overflow-hidden  cursor-pointer`}
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-sky-700 transition-all duration-500 ease-in-out group-hover:w-full rounded-3xl"></span>
              <span className="relative z-10 items-center gap-2">
                {section.icon} {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function PropsAndComponentsContent() {
  const isDark = true;
  return (
    <div className="min-h-screen bg-gray-800 mt-4 rounded">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors duration-200 ${isDark ? "text-white" : "text-gray-500"}`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explaining</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Learn how to use props in React components
          </p>

          <div
            className={`inline-block rounded-full mt-4 px-6 py-2 ${isDark ? "text-gray-300" : " text-gray-800"}`}
          >
            Built with NPM + vite + React + TailwindCSS
          </div>
        </header>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
        </div>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
        </div>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
        </div>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
        </div>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>

        <p className="text-center text-gray-400 mt-8">
          Made for Revision to Props and Components.
        </p>
      </div>
    </div>
  );
}

function PropsAndComponents() {
  return <PropsAndComponentsContent />;
}

export default PropsAndComponents;
