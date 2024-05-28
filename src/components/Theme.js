import { useState } from "react";
const Theme = () => {
  const [theme, setTheme] = useState("light");
  const [attribute1, setAttribute1] = useState("bg-black");
  return (
    <div className={`app ${attribute1} `}>
      <div className="content">
        <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
        <button
          className="rounded-lg bg-green-500"
          onClick={() => {
            // setTheme((prevTheme) =>
            //   prevTheme === "light" ? "dark" : "light"
            // );
            theme == "light" ? setTheme("dark") : setTheme("light");
            theme == "light"
              ? setAttribute1(" bg-black  text-white")
              : setAttribute1("bg-white");
          }}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Theme();
