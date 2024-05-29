import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restraunts from "./components/Restraunts";
import Shimmer from "./components/Shimmer";
import { useState } from "react";

const Cart = lazy(() => import("./components/Cart"));
const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  const [attribute1, setAttribute1] = useState("null");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setAttribute1((prevAttribute) =>
      prevAttribute === "bg-white" ? "bg-orange-300  " : "bg-white"
    );
  };

  return (
    <div className={`app ${attribute1}  `}>
      <div className="content">
        {/* <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1> */}
        <div
          className="layout flex flex-col h-screen justify-between"
          id="Layout">
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const appRender = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restraunts/:ResId",
        element: <Restraunts />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRender} />);
