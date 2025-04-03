import React, { useContext } from "react";
import { ThemeContext } from "../../../pages/Root";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const boxes = [
    {
      id: 0,
      img: "/assets/img/edupress.webp",
      name: "edu-press",
      lang: "Html-Css3-Vanilla javscript",
      href: "https://abdalhadi-alrefai.github.io/edu-press/",
    },
    {
      id: 1,
      img: "/assets/img/products.webp",
      name: "Products",
      lang: "Html-Css3-Vanilla javscript",
      href: "https://abdalhadi-alrefai.github.io/Products/",
    },
    {
      id: 2,
      img: "/assets/img/posts.webp",
      name: "posts",
      lang: "Html-Css3-Vanilla javscript-Api",
      href: "https://abdalhadi-alrefai.github.io/Posts/",
    },
    {
      id: 3,
      img: "/assets/img/Blogs.webp",
      name: "Blogs",
      lang: "Html-Css3-Vanilla javscript",
      href: "https://abdalhadi-alrefai.github.io/Blogs/",
    },
    {
      id: 4,
      img: "/assets/img/books.webp",
      name: "Books-Project",
      lang: "Html-Css3-Vanilla javscript-Api",
      href: "https://abdalhadi-alrefai.github.io/Books-Project/",
    },
    {
      id: 5,
      img: "/assets/img/dashboard.webp",
      name: "dashboard",
      lang: "Html-Css3-Vanilla javscript-Api",
      href: "https://abdalhadi-alrefai.github.io/Dashboard/",
    },
  ];
  return (
    <div
      id="projects"
      className={`projects px-70 max-md:px-24 transition-all duration-500 ease-in-out ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between pb-56 items-end max-md:flex-col max-md:items-start max-md:gap-24">
        <div className="title max-w-[362px]">
          <p className="text-xl font-medium text-myPrimary">Portfolio</p>
          <h1 className="text-[40px] font-semibold">
            My Creative Works Latest{" "}
            <span className="text-myPrimary">Projects</span>
          </h1>
        </div>
        <div className="btn">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-8 bg-myPrimary text-secondary pt-13 pr-21 pb-11 pl-33 rounded-lg cursor-pointer"
          >
            <Link
              target="_blank"
              to="https://github.com/Abdalhadi-Alrefai?tab=repositories"
            >
              View Github{" "}
            </Link>
            <motion.i
              animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <GoArrowUpRight />
            </motion.i>
          </motion.button>
        </div>
      </div>

      <div className="cards  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center place-items-center gap-58 pb-98">
        {boxes.map((box) => {
          return (
            <Link to={`viewproject/${box.id}`} key={box.id}>
              <div data-aos="fade-up">
                <img
                  className="pb-32  rounded-lg shadow-lg object-cover"
                  src={box.img}
                  alt=""
                />
                <h2 className="text-[22px] font-semibold">{box.name}</h2>
                <div className="lang flex justify-between items-center">
                  <p className="text-base font-normal">{box.lang}</p>
                  <a
                    href={box.href}
                    onClick={(event) => event.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      className="cursor-pointer"
                      src="./assets/img/Icon.svg"
                      alt="Icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  </a>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
