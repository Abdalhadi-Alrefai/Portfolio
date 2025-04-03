import { ThemeContext } from "../../../pages/Root";
import React, { useContext } from "react";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const info = [
    {
      icon: "./assets/img/call.svg",
      title: "Call me",
      description: "+963947075253",
    },
    {
      icon: "./assets/img/email.svg",
      title: "Email me",
      description: "abdalhadialrefai2002@gmail.com",
    },
    {
      icon: "./assets/img/location.svg",
      title: "Address",
      description: "Damascus,syria",
    },
  ];
  return (
    <div
      id="contact"
      className={`projects px-70 pb-94 max-md:px-24 transition-all duration-500 ease-in-out ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
      }`}
    >
      <div className="title pb-56">
        <p className="text-xl font-medium text-myPrimary">Contact</p>
        <h1 className="text-[40px] font-semibold">
          Let’s Discuss Your <span className="text-myPrimary">Project</span>
        </h1>
      </div>
      <div className="my-info flex justify-between max-xl:gap-34 max-xl:flex-col">
        <div
          className="flex flex-col justify-between gap-27"
          data-aos="fade-right"
        >
          {info.map((item, index) => (
            <div
              key={index}
              className="flex gap-19 items-center max-sm:flex-col max-sm:text-center"
            >
              <div className="image">
                <img src={item.icon} alt="" />
              </div>
              <div className="info">
                <p className="text-base font-normal text-fifth">{item.title}</p>
                <h3 className="text-base font-medium">{item.description}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="form">
          <form data-aos="fade-left">
            <div className="name-email flex gap-26 h-56 mb-24">
              <input
                className="border-1 border-six w-375 max-xl:w-full rounded-lg pl-26 placeholder: text-fifth"
                type="text"
                placeholder="Full name"
              />
              <input
                className="border-1 border-six w-375 max-xl:w-full rounded-lg pl-26 placeholder: text-fifth"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="phone ">
              <input
                className="border-1 border-six h-56 w-full rounded-lg mb-24 pl-26 placeholder: text-fifth"
                type="number"
                placeholder="Phone number"
              />
            </div>
            <div className="message mb-20">
              <textarea
                className="h-170 w-full rounded-lg resize-none border-1 pl-26 pt-16 border-six placeholder: text-fifth"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="send">
              <input
                className="bg-myPrimary text-secondary px-50 py-15 rounded-lg cursor-pointer"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
