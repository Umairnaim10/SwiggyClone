import "./App.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/footer";
import { createBrowserRouter ,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
//Routing is of two type - CSR & SSR
//Client Side Routing & Server Side Routing
const AppProvider = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },

    ]
  },
  
]);

export default AppProvider;
