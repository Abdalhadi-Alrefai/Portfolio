import { ThemeContext } from "../../../pages/Root";
import React, { useContext } from 'react'
import { motion } from "framer-motion";


const Footer = () => {
  const {theme} = useContext(ThemeContext)
  const icons = [
    {
      icon : "/assets/img/facebook-1.svg",
      url: "https://www.facebook.com/share/1AHtJstGpA/",
    },
    {
      icon : "/assets/img/twitter-1.svg",
      url: "https://twitter.com",
    },
    {
      icon : "/assets/img/linkedin-1.svg",
      url: "https://www.linkedin.com/in/abdalhadi-alrefai-703a23276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon : "/assets/img/instagram-1.svg",
      url: "https://www.instagram.com/abdalhadi_alrefai?igsh=MTYxem81OTIwNTB4aw==",
    },
  ]
  
  return (
    <div className={`transition-all duration-500 ease-in-out ${
      theme === "dark" ? "bg-dark text-white" : "bg-white text-black"
    }`}>
      <div className="border-t-2 border-six md:w-[93%] md:mx-70 max-md:mx-40"></div>
      <div className="pl-69 pr-72 max-md:px-70 pt-36 pb-45 flex justify-between gap-24 max-sm:flex-col max-sm:items-center">
      <div className="">
      <p className="copyright text-base font-normal">
      @ 2024. <span> All Rights Reserved</span> &nbsp; 
      </p>
      </div>
      <div className="text-base font-normal">
        <h1>Develpoment by Abdalhadi</h1>
      </div>
      <div className="flex gap-16">
        {icons.map((item,index) => (
          <div key={index}>
            <a href={item.url} target='_blank'>
            <motion.img src={item.icon} alt="icon" whileHover={{scale:1.1}} whileTap={{scale:0.9}}/>
            </a>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}
 
export default Footer
