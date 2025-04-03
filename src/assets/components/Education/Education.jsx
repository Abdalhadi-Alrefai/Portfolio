import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../pages/Root";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Education = () => {
  const { theme } = useContext(ThemeContext);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const experince = [
    {
      title: "Frontend Developer",
      description:
        "Developing user interfaces using HTML, CSS, and JavaScript,Mastering frameworks like React to build modern and innovative web applications,Optimizing website performance to ensure a smooth and fast user experience,Creating responsive websites that work seamlessly on all screen sizes and devices,Create interactive components with the user.",
    },
    {
      title: "Effective Communication",
      description:
        "I believe that effective communication and problem-solving are key to success in every project. I focus on understanding client needs thoroughly to deliver innovative and efficient solutions. By actively listening, I can overcome technical challenges and design websites that provide an excellent user experience, focusing on performance and meeting requirements with precision.",
    },
    {
      title: "Experince Designer",
      description:
        "As an Experience Designer, I focus on crafting intuitive and visually compelling user experiences. With expertise in Adobe Photoshop, Figma, and Illustrator, I blend creativity with analytical thinking to design user-centered interfaces. I specialize in creating seamless, engaging visuals that enhance usability and aesthetics. Collaborating with teams, I ensure that every design translates into a functional and impactful digital experience",
    },
    {
      title: "Crafting Interactive Web Experiences",
      description:
        "I specialize in building dynamic and engaging user interfaces. Using modern frameworks like React and Vue.js, I create interactive components that enhance usability and improve user engagement. My expertise in responsive design ensures smooth and visually appealing experiences across devices. By focusing on performance and accessibility, I develop web applications that are both functional and user-friendly.",
    },
  ];
  return (
    <div
      id="education"
      className={`education relative transition-all duration-500 ease-in-out  ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center">
        <p className="text-xl font-medium text-myPrimary">
          Education and Experience
        </p>
        <h1 className="text-[40px] font-semibold max-md:text-[30px]">
          Education & Experience
        </h1>
        <div className="absolute right-0 top-0 max-md:top-45">
          <img src="./assets/img/Images-bg.svg" alt="" />
        </div>
      </div>
      <div>
        {showButton && (
          <motion.button
            animate={{ y: [-8, 0, -8] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={scrollTop}
            className="Top md:mr-70 max-md:mr-24 fixed bottom-6 right-6 bg-myPrimary text-secondary p-12 rounded-xl cursor-pointer"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 pt-88 pb-184 px-70 max-sm:px-55">
        {experince.map((item, index) => {
          return (
            <div
              key={index}
              className="relative pl-47 w-full max-w-[550px] border-l-2 border-dashed border-gray-400"
              data-aos="fade-left"
            >
              <div className="absolute -top-0 -left-12">
                {theme === "dark" ? (
                  <img src="./assets/img/Circle.png" alt="" />
                ) : (
                  <img src="./assets/img/Circle-dark.svg" alt="" />
                )}
              </div>
              <h3 className="text-[25px] font-medium pb-14 max-sm:text-xl">
                {item.title}
              </h3>
              <p
                className={`text-base font-normal text-third ${
                  index < experince.length - 2 ? "pb-46" : ""
                }`}
              >
                {item.description}
              </p>
            </div>
          );
        })}
        <div className="absolute left-0 md:bottom-1/3 max-md:-bottom-0 max-md:-translate-y-500">
          <img src="./assets/img/Images-bg2.svg" alt="" />
        </div>
      </div>

      <div
        className={`pt-28 pb-94 flex justify-center transition-all duration-500 ease-in-out   ${
          theme === "dark" ? "bg-dark" : "bg-white"
        }`}
      >
        <div
          className="go-contact flex md:justify-between gap-20 max-md:justify-center max-sm:flex-col max-md:py-20 items-center bg-[url(/assets/img/bg-contact.svg)] bg-cover max-md:bg-cover h-375 w-1182 text-secondary"
          data-aos="fade-up"
        >
          <div className="pl-126 w-[589px]">
            <h1 className="text-5xl font-semibold pb-10 max-md:text-2xl">
              Try me out, risk free!
            </h1>
            <p className="text-xl font-normal max-md:text-base max-md:max-w-300">
              If you’re not happy with the design after the first draft, I’ll
              refund your deposit, no questions asked
            </p>
          </div>
          <div className="btn">
            <Link to="contact" smooth={true} duration={600}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-myPrimary pt-12 pr-29 pb-14 pl-40 mr-133 flex items-center gap-12 rounded-md cursor-pointer"
              >
                Contact{" "}
                <i>
                  <FaArrowRight />
                </i>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
