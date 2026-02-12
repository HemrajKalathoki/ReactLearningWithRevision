/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
import { Button } from "./BasicProps";
import { Card } from "./ChildrenProps";

// Create theme context
const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

/* ===============================
   Theme Toggle Button
================================= */
function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm sm:text-base font-semibold">
        {isDark ? "Dark Theme" : "Light Theme"}
      </span>

      <button
        onClick={toggleTheme}
        className={`relative w-14 h-7 sm:w-16 sm:h-8 flex items-center rounded-full transition-colors duration-300 ${
          isDark ? "bg-gray-700" : "bg-yellow-300"
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
            isDark ? "translate-x-7 sm:translate-x-8" : "translate-x-0"
          }`}
        >
          {isDark ? "🌙" : "☀️"}
        </div>
      </button>
    </div>
  );
}

/* ===============================
   Theme Card
================================= */
function ThemeCard({ title, children, className = "" }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-4 sm:p-6 lg:p-8 rounded-xl shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-700 text-white" : "bg-white text-gray-800"
      } ${className}`}
    >
      <h3 className="text-lg sm:text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}

/* ===============================
   Main Component
================================= */
function ThemeToggler() {
  const { isDark } = useTheme();
  const [clickCounter, setClickCounter] = useState(0);

  return (
    <section
      className={`mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 rounded-xl shadow-lg mt-6 transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Theme Toggler</h1>
        <ThemeToggleButton />
      </div>

      <p className="text-sm sm:text-base mb-6">
        This section demonstrates theme toggling using the Context API and
        props. The theme state is shared across child components without prop
        drilling.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {/* User Info */}
        <ThemeCard title="User Information">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-sm sm:text-base">
              <span>Name: Hemraj Kalathoki</span>
              <span>Email: hemraj.kalathoki3@gmail.com</span>
              <span>Role: Software Developer</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                text="Edit Profile"
                color={isDark ? "primary" : "warning"}
                onClick={() => setClickCounter((prev) => prev + 1)}
              />
              <Button
                text="Settings"
                color="secondary"
                onClick={() => setClickCounter((prev) => prev + 1)}
              />
            </div>
          </div>
        </ThemeCard>

        {/* Statistics */}
        <ThemeCard title="Statistics">
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Total Clicks:</span>
              <span className="text-blue-500 font-bold">{clickCounter}</span>
            </div>

            <div className="flex justify-between">
              <span>Theme:</span>
              <span className="font-semibold">{isDark ? "Dark" : "Light"}</span>
            </div>

            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-green-500 font-semibold">Active</span>
            </div>
          </div>
        </ThemeCard>

        {/* Interactive Demo */}
        <ThemeCard title="Interactive Demo" className="md:col-span-2">
          <div className="flex flex-col gap-4">
            <span className="text-sm sm:text-base">
              Try clicking the buttons below to see how they adapt to the
              current theme.
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Button
                text="Primary Action"
                color={isDark ? "primary" : "warning"}
                onClick={() => setClickCounter((prev) => prev + 1)}
              />
              <Button
                text="Secondary Action"
                color="secondary"
                onClick={() => setClickCounter((prev) => prev + 1)}
              />
              <Button
                text="Reset Counter"
                color="danger"
                onClick={() => setClickCounter(0)}
              />
            </div>
          </div>
        </ThemeCard>
      </div>

      {/* Extra Card */}
      <div className="mt-6">
        <Card title="Why Context + Props?" color={isDark ? "blue" : "yellow"}>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>Avoids prop drilling through multiple component layers.</li>
            <li>Provides global state management.</li>
            <li>Keeps components clean and reusable.</li>
            <li>Improves scalability of applications.</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

export default ThemeToggler;
