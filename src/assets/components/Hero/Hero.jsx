import React, { useContext, useEffect, useState } from "react";
import Icons from "./Icons";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../pages/Root";


const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const iconItems = [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/share/1AHtJstGpA/",
      icon: "./assets/img/facebook.svg",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/abdalhadi_alrefai?igsh=MTYxem81OTIwNTB4aw==",
      icon: "./assets/img/instagram.svg",
    },
    {
      id: 3,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/abdalhadi-alrefai-703a23276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: "./assets/img/linkedin.svg",
    },
  ];

  const title = `HEY! I’m Abdalhadi, Frontend Developer`;
  const description =
    "I'm a frontend developer specializing in creating exceptional web applications using React. With over 1 year of experience in web development, I've had the pleasure of working with a variety of clients to deliver high-quality coding solutions.";

  const [displaytitle, setDisplayTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);

  const [Description, setDescription] = useState("");
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [titleIsDone, setTitleIsDone] = useState(false);

  useEffect(() => {
    if (titleIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayTitle((prev) => prev + title[titleIndex]);
        setTitleIndex(titleIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTitleIsDone(true);
      setDescription(description.split(" "));
    }
  }, [titleIndex]);

  useEffect(() => {
    if (titleIsDone && descriptionIndex < description.length) {
      const timeout = setTimeout(() => {
        setDescriptionIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [descriptionIndex, titleIsDone]);

  return (
    <>
      <div
        id="home"
        className={`hero flex justify-between max-xl:flex-col px-70 pb-117 md:pt-124 max-md:pt-47 max-md:px-24 transition-all duration-500 ease-in-out ${
          theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
        }`}
      >
        <div className="title w-full max-md:max-w-[462px] md:max-w-[562px] pt-100 md:pt-24">
          <h2 className="font-Inter text-xl font-medium text-myPrimary">
            Welcome
          </h2>
          <motion.h1
            className="text-[50px] font-medium relative max-md:text-[40px] max-sm:text-[30px] max-md:pb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {displaytitle}
            <motion.span
              className="ml-5 h-[40px] w-[3px] inline-block bg-myPrimary"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </motion.h1>

          {titleIsDone && (
            <p className="text-lg text-gray-400 mt-4 break-words w-full">
              {Description.slice(0, descriptionIndex).map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mr-5 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-30 ml-5 bg-myPrimary text-secondary pt-14 pb-15 pr-32 pl-34 rounded-lg cursor-pointer"
          >
            <a href="/assets/bdf/My_CV.pdf" download="My_CV.pdf">
              Download Cv
            </a>
          </motion.button>
        </div>
        <div className="profile md:relative flex flex-col items-center">
          <div className="image md:pr-34">
            <img src="./assets/img/Asset.png" alt="profile" />
          </div>
          <div className="links md:absolute right-[-30px] top-1/4 flex max-md:flex-col md:flex-col items-center gap-32">
            <p className="text-base max-md:text-2xl font-semibold rotate-90 md:mb-32 max-md:rotate-0 max-md:mt-25">
              Follow me on:
            </p>
            <div className="w-[2px] h-64 bg-myPrimary max-md:h-2 max-md:w-64"></div>
            <div className="icons flex flex-col gap-32 max-md:flex-row">
              {iconItems.map((iconItems, index) => {
                return (
                  <Icons
                    key={index}
                    url={iconItems.url}
                    icon={iconItems.icon}
                  />
                );
              })}
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full my-20 md:hidden">
            <div className="w-full border-t-2 border-dotted border-myPrimary"></div>
            <div className="absolute bg-white border-2 border-gray-400 rounded-full w-8 h-8"></div>
          </div>
        </div>
      </div>
      <div
        className={`relative flex items-center justify-center w-full bg-black ${
          theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-full border-t-2 border-dashed border-gray-400 p-0"></div>
        <div className="absolute bg-white border-2 border-gray-400 rounded-full w-22 h-22"></div>
      </div>
    </>
  );
};

export default Hero;
