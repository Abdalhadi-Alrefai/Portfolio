import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../../pages/Root";

const ProjectSlider = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const projectId = parseInt(id);
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
  const [centerProjectId, setCenterProjectId] = useState(0);

  const handleNext = () => {
    setPositionIndex((PrevIndexes) =>
      PrevIndexes.map((PrevIndex) => (PrevIndex + 1) % 5)
    );
  };

  const handlePrev = () => {
    setPositionIndex((PrevIndexes) =>
      PrevIndexes.map((PrevIndex) => (PrevIndex - 1 + 5) % 5)
    );
  };
  useEffect(() => {
    setCenterProjectId(positionIndex.indexOf(0));
  }, [positionIndex]);

  const projects = [
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

  const filteredProjects = projects.filter(
    (project) => project.id !== projectId
  );

  const positions = ["center", "left", "left1", "right", "right1"];

  const imgVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };
  return (
    <div
      className={`projects px-70 pt-90 max-md:px-24 transition-all duration-500 ease-in-out h-screen ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between pb-56 items-end">
        <div className="title max-w-[362px]">
          <p className="text-xl font-medium text-myPrimary">Portfolio</p>
          <h1 className="text-[40px] font-semibold">
            The Best <span className="text-myPrimary">Projects</span>
          </h1>
        </div>
        <div className="">
          <button className="flex gap-8 cursor-pointer">
            <motion.i
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-15 py-15 flex items-center justify-center rounded-full border-1 border-myPrimary text-forth"
            >
              <FaChevronLeft />
            </motion.i>
            <motion.i
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-15 py-15 flex items-center justify-center rounded-full border-1 border-myPrimary bg-myPrimary text-white"
            >
              <FaChevronRight />
            </motion.i>
          </button>
        </div>
      </div>

      <div className="flex items-center flex-col relative" data-aos="fade-up">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="center"
            animate={positions[positionIndex[index]]}
            variants={imgVariants}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute" }}
          >
            <img
              className="pb-32 w-600 rounded-lg shadow"
              src={project.img}
              alt=""
            />
            {index === centerProjectId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lang flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-[22px] font-semibold">
                      {project.name}
                    </h2>
                    <p className="text-base font-normal">{project.lang}</p>
                  </div>
                  <div className="">
                    <a
                      href={project.href}
                      onClick={(event) => event.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.img
                        className="cursor-pointer"
                        src="/assets/img/Icon.svg"
                        alt="Icon"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
