import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const NavItem = ({ href, content }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const moveProject = href.startsWith("#");

  if (href === "#home") {
    return isHomePage ? (
      <Link
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="text-myPrimary"
        className="cursor-pointer hover:text-myPrimary duration-300"
      >
        {content}
      </Link>
    ) : (
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-myPrimary" : "")}
      >
        {content}
      </NavLink>
    );
  }

  return moveProject ? (
    <Link
      to={href.replace("#", "")}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      activeClass="text-myPrimary"
      className="cursor-pointer hover:text-myPrimary duration-300"
    >
      {content}
    </Link>
  ) : (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? "text-myPrimary" : "")}
    >
      {content}
    </NavLink>
  );
};

export default NavItem;
