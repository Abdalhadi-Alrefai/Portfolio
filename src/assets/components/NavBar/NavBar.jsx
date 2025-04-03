import React, { useContext, useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { ThemeContext } from "../../../pages/Root";
import sun from "/assets/img/Sun_fill.svg";

const NavBar = ({ logo, navItems }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sideBar = useRef(null);
  const toggleBtn = useRef(null);

  useEffect(() => {
    const ClickOut = (event) => {
      if (
        sideBar.current &&
        !sideBar.current.contains(event.target) &&
        toggleBtn.current &&
        !toggleBtn.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", ClickOut);

    return () => document.removeEventListener("mousedown", ClickOut);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed right-0 left-0 flex justify-between items-center px-70 h-80 font-Poppins z-999 max-md:px-24
    ${
      isScrolled ? "shadow-mainNav" : ""
    } #374151 transition-all duration-500 ease-in-out  ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
      }`}
    >
      <div className="logo text-2xl font-semibold">
        <h1>{logo}</h1>
      </div>
      <button
        ref={toggleBtn}
        className="toggle-menu text-2xl cursor-pointer ml-auto max-md:block z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <img src="./assets/img/Close.svg" />
        ) : (
          <img src="./assets/img/Menu.svg" />
        )}
      </button>

      <div
        ref={sideBar}
        className={`max-md:fixed max-md:top-0 max-md:right-0 max-md:shadow-md max-md:w-[256px] max-md:h-full 
          transition-all duration-500 ease-in-out 
          ${isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"} 
          ${theme === "dark" ? "bg-dark text-white" : "bg-white text-black"}`}
      >
        <button
          className="md:hidden cursor-pointer max-md:pt-25 max-md:pl-50"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <img
              className="w-40 h-40"
              src="./assets/img/Vector.svg"
              alt="dark-mode"
            />
          ) : (
            <img
              className="w-40 h-40"
              src="./assets/img/Sun_fill.svg"
              alt="dark-mode"
            />
          )}
        </button>
        <ul className="flex gap-24 max-md:flex-col  max-md:pt-40 max-md:pl-50">
          {navItems.map((item, index) => (
            <li className="text-base font-medium" key={index}>
              <NavItem href={item.href} content={item.content} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mode">
        <button
          className="cursor-pointer max-md:hidden"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <img
              className="w-40 h-40"
              src="./assets/img/Vector.svg"
              alt="dark-mode"
            />
          ) : (
            <img
              className="w-40 h-40"
              src="./assets/img/Sun_fill.svg"
              alt="dark-mode"
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
