import { Link } from "gatsby";
import React, { useState } from "react";
import { Animation } from "../utils/animation";
import menu from "../images/menu.png";
import { useScrollMove } from "../hook/useScrollMove";

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const { scrollTo } = useScrollMove({})

  return (
    <Animation speedAnimation="x 3s" animationType="fadeIn" >
      <header className="flex flex-row justify-between  z-10  py-3 container  mx-auto">
        <h2 
          className="text-3xl text-blue-700 flex-1 p-4 font-sans font-semibold max-w-xs"
          style={{fontFamily:"Noto Sans Mono"}}
        >
          Daniel Porras
        </h2>
        <div className=" flex-row items-center mx-9 invisible hidden sm:visible sm:flex">
          <span className="link-items  ">Home</span>
          <span className="link-items"onClick={()=> {scrollTo("skills")}}>
            <p >Skills</p>
          </span>
          <span className="link-items " onClick={()=> {scrollTo("projects")}}>
            <p  >Projects</p>
          </span>
          <span className="link-items " onClick={()=> {scrollTo("contact")}}>
            <p >Contact</p>
          </span>

          
        </div>
        <a
            className={`rounded-md p-1 transition-all  border border-transparent visible sm:invisible sm:hidden
                  active:bg-neutral-100
                  hover:border-blue-300 hover:border
                `}
            onClick={() => setMenuBtn(!menuBtn)}
          >
            <img src={menu} alt="icon-menu" className="w-10" />
        </a>
      </header>

      <div
        className={` absolute -left-full  w-full  flex flex-col gap-2 visible sm:invisible  sm:hidden  transition-all text-center ${menuBtn && "menu-active"}`}
      >
        <a className="link-items" onClick={() => setMenuBtn(false)} href="#about-me">  
          About me
        </a>
        <a className="link-items" onClick={() => setMenuBtn(false)} href="#skills">
          Skills
        </a>
        <a className="link-items" onClick={() => setMenuBtn(false)} href="#projects">
          Projects
        </a>
        <a className="link-items" onClick={() => setMenuBtn(false)} href="#contact">
          Contact
        </a>
      </div>
    </Animation>
  );
};

export default Navbar;
