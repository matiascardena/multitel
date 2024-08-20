import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const HeaderBasico = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="bg-white fixed left-0 top-0 w-full z-10 ease-in xs:h-12 md:h-24 lg:h-12 xl:h-12 mx-auto border-bottom">
      <div className="max-w-[1240px] m-auto mb-4 mt-2 md:mb-0 flex flex-wrap items-center justify-center">
      <a href="/#Home" className="hidden sm:flex text-Multitel ml-10 items-center">
              {/* <img loading="lazy" className="w-10 h-10 items-right m-1" src="./Logo_Multitel.png" /> */}
              <span className="text-xl text-black"> <b>Multi</b> </span>
              <span className="text-xl text-Multitel"> <b>Tel</b> </span>
            </a>
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
                <img loading="lazy" className="w-15 h-15" src="./Logo_Multitel.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderBasico;
