import React, { createContext, useEffect, useState } from "react";
import NavBar from "../assets/components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../assets/components/Footer/Footer";




export const ThemeContext = createContext(null)
const Root = () => {

  const [theme,setTheme] = useState(localStorage.getItem("theme" || "light"))

  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])
  const Items = [
    {
      href: "#home",
      content: "Home",
    },
    {
      href: "#about",
      content: "About me",
    },
    {
      href: "#education",
      content: "Education",
    },
    {
      href: "#projects",
      content: "Projects",
    },
    {
      href: "#contact",
      content: "Contact",
    },
  ];
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <NavBar logo="Dev.Abdalhadi" navItems={Items}/>
      <Outlet/>
      <Footer/>
    </ThemeContext.Provider>
  );
};

export default Root;

