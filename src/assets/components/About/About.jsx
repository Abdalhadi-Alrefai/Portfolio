import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../../pages/Root";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const progHolder = [
    { title: "HTML5", level: 90 },
    { title: "CSS3", level: 80 },
    { title: "Javascript", level: 95 },
    { title: "React", level: 95 },
  ];
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="about"
      className={`flex justify-between items-center px-70 pt-60 pb-142 max-md:flex-col-reverse max-md:px-24 transition-all duration-500 ease-in-out ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
      }`}
    >
      <div className="icon-programs" data-aos="fade-right">
        <img
          src={
            theme === "dark"
              ? "./assets/img/programs.png"
              : "./assets/img/programs-light.png"
          }
          alt="programs"
        />
      </div>

      <div className="prog-holder md:w-598" data-aos="fade-up">
        <h1 className="text-[50px] font-semibold max-md:text-[40px]">
          About Me
        </h1>
        <p className="text-lg font-normal  pb-40 break-words">
          I'm abdalhadi alrefai, hailing from daraa city, Syria. I am currently
          studying Informatics Engineering at alsham Private University, where I
          am learning the latest technologies and skills needed in the field of
          programming and software development. My journey as a frontend
          developer began in 2021, with my first experience in programming at
          online. Since then, I've been passionate about developing user
          interfaces and enhancing user experiences by designing and building
          interactive and attractive web applications.
        </p>

        {progHolder.map((item, index) => {
          return (
            <div key={index} className="mb-6 relative" data-aos="fade-left">
              <h4 className="text-2xl font-semibold pb-13">{item.title}</h4>
              <div className="relative w-full h-11 bg-gray-300 rounded-full mb-23">
                <div
                  className="relative h-full bg-myPrimary rounded-full"
                  style={{ width: `${item.level}%` }}
                >
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[25px] h-[25px] bg-white border-4 border-blue-500 rounded-full z-10"></div>
                </div>
              </div>

              <div
                className="absolute -top-7 text-white text-sm font-bold bg-blue-500 px-2 py-1 rounded-md"
                style={{ left: `calc(${item.level}% - 20px)` }}
              >
                {item.level}%
              </div>
              <div
                className="absolute top-15 left-1/2 transform -translate-x-1/2 border-[6px] border-solid border-blue-500 border-b-transparent border-l-transparent border-r-transparent z-20"
                style={{ left: `calc(${item.level}% - 6px)` }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
