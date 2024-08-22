import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="bg-white fixed left-0 top-0 w-full z-10 ease-in h-12 mx-auto">
      <div className="max-w-[1240px] m-auto mb-4 mt-2 md:mb-0 xs:landscapes:mb-0 sm:landscapes:mb-0 flex flex-wrap items-center justify-center">
      <a href="/#Home" className="hidden sm:flex xs:landscapes:mr-20 sm:landscapes:mr-20 text-Multitel ml-10 items-center">
              <img loading="lazy" className="w-3/4 h-10 items-right" src="./Multitel_EsControl.jpg" />
              {/* <span className="text-xl text-black"> <b>Multi</b> </span>
              <span className="text-xl text-Multitel"> <b>Tel</b> </span> */}
            </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-2">
        <ul className="hidden sm:flex">
        <li className="px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
            <a href="/#SeccionServicios">Servicios</a>
          </li>         
          <li className="px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
            <a href="/#SeccionProductos">Productos</a>
          </li>
          {/* <li className="px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
            <a href="/#SeccionObras">Nuestras Obras</a>
          </li> */}
          <li className="px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
            <a href="/#SeccionConocenos">Conocenos</a>
          </li>
          <li className="px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
            <a href="/#SeccionConsultanos">Consultanos</a>
          </li>
        </ul>
      </nav>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden mt-2 z-10 items-center justify-center">
          {nav ? (
            <AiOutlineClose size={25} className="text-Multitel" />
          ) : (
            <AiOutlineMenu size={25} className="text-Multitel" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "text-Multitel sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center justify-center w-full h-screen bg-white text-center ease-in duration-300"
              : "text-Multitel sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center justify-center w-full h-screen bg-white text-center ease-in duration-300"
          }>

          <ul>
            <li
              onClick={handleNav}
              className="flex p-4 justify-center">
              <a href="/#Home" >
                <img loading="lazy" className="w-15 h-15" src="./Logo_Multitel.webp" />
              </a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
              <a href="/#SeccionServicios">Servicios</a>
            </li>

            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
              <a href="/#SeccionProductos">Productos</a>
            </li>
            {/* <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
              <a href="/#SeccionObras">Nuestas Obras</a>
            </li> */}
            <li
              onClick={handleNav}         
              className="p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
              <a href="/#SeccionConocenos">Conocenos</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">
              <a href="/#SeccionConsultanos">Consultanos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
