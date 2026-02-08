import React from "react";

import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import RefProps from "./components/RefProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
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
      label: "Theme Props",
      icon: "🎨",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-gray-800 text-center py-2">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-2">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className="relative group px-3 sm:px-4 py-1 sm:py-2 rounded-3xl font-medium bg-sky-600 text-white overflow-hidden cursor-pointer text-xs sm:text-sm"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-sky-700 transition-all duration-500 ease-in-out group-hover:w-full rounded-3xl"></span>
            <span className="relative z-10 flex items-center gap-1 sm:gap-2">
              {section.icon} {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function PropsAndComponentsContent() {
  const isDark = true;
  return (
    <div className="min-h-screen bg-gray-900 text-white mt-4 rounded w-full">
      <Navigation />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 py-8">
        <header className="text-center mb-12 transition-colors duration-200">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            React Props Explaining
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 lg:mb-2">
            Learn how to use props in React components
          </p>
          <div className="inline-block rounded-full mt-4 px-4 text-gray-300 text-sm sm:text-base">
            Built with NPM + Vite + React + TailwindCSS
          </div>
        </header>

        <div className="space-y-12">
          <section id="basic" className="scroll-mt-24">
            <BasicProps />
          </section>

          <section id="children" className="scroll-mt-24">
            <ChildrenProps />
          </section>

          <section id="complex" className="scroll-mt-24">
            <ComplexProps />
          </section>

          <section id="ref" className="scroll-mt-24">
            <RefProps />
          </section>

          <section id="theme" className="scroll-mt-24">
            <ThemeToggler />
          </section>
        </div>

        <p className="text-center text-gray-400 mt-12 mb-4">
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
