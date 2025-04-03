import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../../pages/Root";
import { motion } from "framer-motion";

const Myproject = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const projectId = parseInt(id);
  const imgRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 0,
      img: "./assets/img/edupress.webp",
      name: "edu-press",
      lang: "Html-Css3-Vanilla javscript",
      date: "23/8/2024",
      description:
        "EduPress is an online learning platform designed to help users build their skills through digital courses. The website features a modern and engaging design with a user-friendly interface, ensuring a seamless learning experience. It includes functionalities such as course browsing, blog reading, user registration, and more.",
      langs: "Html5 , Css , Javascript",
      Framework: "CSS Pure",
      Libraries: "React.js",
      repo: "https://github.com/Abdalhadi-Alrefai/edu-press",
      href: "https://abdalhadi-alrefai.github.io/edu-press/",
    },
    {
      id: 1,
      img: "./assets/img/products.webp",
      name: "Products",
      lang: "Html-Css3-Vanilla javscript",
      date: "20/12/2024",
      description:
        "Cozy is a modern e-commerce platform that showcases a wide range of products with seamless search and cart management functionality. Users can effortlessly browse, search for products, and add or remove items from their cart. The sleek and intuitive interface enhances the shopping experience, making it more enjoyable and efficient. The platform also features exclusive discounts and special offers to attract customers and improve engagement.",
      langs: "Html5 , Css , Javascript",
      Framework: "CSS Pure",
      Libraries: "React.js",
      repo: "https://github.com/Abdalhadi-Alrefai/Products",
      href: "https://abdalhadi-alrefai.github.io/Products/",
    },
    {
      id: 2,
      img: "./assets/img/posts.webp",
      name: "posts",
      lang: "Html-Css3-Vanilla javscript",
      date: "5/1/2025",
      description:
        "This project focuses on handling CRUD operations for posts using JavaScript and API requests. The implementation includes: Fetching and displaying posts from the API.Adding a new post dynamically.Updating an existing post based on user input.Deleting a post from the database.By integrating these functionalities, the project ensures seamless data management, following best practices for API interaction and asynchronous JavaScript.",
      langs: "Html5 , Css , Javascript",
      Framework: "Bootstrap",
      Libraries: "React.js",
      repo: "https://github.com/Abdalhadi-Alrefai/Posts",
      href: "https://abdalhadi-alrefai.github.io/Posts/",
    },
    {
      id: 3,
      img: "./assets/img/Blogs.webp",
      name: "Blogs",
      lang: "Html-Css3-Vanilla React",
      date: "15/1/2025",
      description:
        "This project is a responsive blog platform built with React.js and structured with reusable components. Developed using Vite, it ensures fast performance and clean, maintainable code. The design strictly follows the required layout while implementing best practices for modern web development.",
      langs: "Html5 , Css , Javascript",
      Framework: "Bootstrap",
      Libraries: "React.js",
      repo: "https://github.com/Abdalhadi-Alrefai/Blogs",
      href: "https://abdalhadi-alrefai.github.io/Blogs/",
    },
    {
      id: 4,
      img: "./assets/img/books.webp",
      name: "Books-Project",
      lang: "Html-Css3-React",
      date: "19/2/2025",
      description:
        "B-World is an interactive book discovery platform that showcases a wide range of books and their details using an API. This project dynamically fetches book information, including titles, authors, and cover images, providing users with an engaging experience to explore their next read. The sleek and modern design ensures a smooth browsing experience, making book selection easier and more enjoyable.",
      langs: "Html5 , Css , Javascript",
      Framework: "Bootstrap",
      Libraries: "React.js",
      repo: "https://github.com/Abdalhadi-Alrefai/Books-Project",
      href: "https://abdalhadi-alrefai.github.io/Books-Project/",
    },
    {
      id: 5,
      img: "./assets/img/dashboard.webp",
      name: "dashboard",
      lang: "Html-Css3-React",
      date: "10/3/2025",
      description:
        "This Dashboard was developed using React.js to efficiently manage and display data through a dynamic and responsive user interface. The project includes essential features such as account creation, login, logout, and item display, with additional tasks for adding, editing, and deleting items.The design follows best practices in modern frontend development, ensuring high performance and a seamless user experience.",
      langs: "Html5 , Css , Javascript",
      Framework: "Bootstrap",
      Libraries: "React.js",
      repo: "https://github.com/Abdalhadi-Alrefai/Dashboard",
      href: "https://abdalhadi-alrefai.github.io/Dashboard/",
    },
  ];

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  const handleFullScreen = () => {
    if (imgRef.current) {
      if (imgRef.current.requestFullscreen) {
        imgRef.current.requestFullscreen();
      } else if (imgRef.current.mozrRquestFullScreen) {
        imgRef.current.mozRequestFullScreen();
      } else if (imgRef.current.webkitRequestFullscreen) {
        imgRef.current.webkitRequestFullscreen();
      } else if (imgRef.current.msRequestFullscreen) {
        imgRef.current.msRequestFullscreen();
      }
    }
  };
  return (
    <>
      <div
        className={`flex justify-between gap-43 pt-170 px-68 max-md:px-24 max-xl:flex-col pb-117 transition-all duration-500 ease-in-out ${
          theme == "dark" ? "bg-dark text-white" : "bg-white text-black"
        }`}
      >
        <div className="cursor-pointer relative group">
          <img
            ref={imgRef}
            className="rounded-lg h-full w-full shadow-lg"
            src={project.img}
            alt=""
          />
          <div className="hover:bg-hover flex gap-32 absolute inset-0 justify-center items-center rounded-lg bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
            <motion.img
              onClick={handleFullScreen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="opacity-0 group-hover:opacity-100"
              src="./assets/img/Full_alt.svg"
              alt="Full_alt"
            />
            <a href={project.href} target="_blank">
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="opacity-0 group-hover:opacity-100"
                src="./assets/img/showDemo.png"
                alt="showDemo"
              />
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-[28px] font-semibold">{project.name}</h1>
              <p className="text-sm font-medium text-forth">{project.date}</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <a href={project.href} target="_blank">
                <img src="./assets/img/Icon.svg" alt="" />
              </a>
            </motion.div>
          </div>

          <p className="text-lg font-normal pt-11 pb-17">
            {project.description}
          </p>
          <p>
            <span className="text-lg font-medium">Basic Languages : </span>
            {project.langs}
          </p>
          <p className="py-11">
            <span className="text-lg font-medium">Framework : </span>
            {project.Framework}
          </p>
          <p className="pb-29">
            <span className="text-lg font-medium">Libraries : </span>
            {project.Libraries}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="py-11 px-32 bg-myPrimary text-secondary rounded-lg"
          >
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              Github Repo
            </a>
          </motion.button>
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
export default Myproject;
