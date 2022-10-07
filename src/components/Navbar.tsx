import { Link } from "gatsby";
import React, { useState } from "react";
import { Animation } from "../utils/animation";
import { useScrollMove } from "../hook/useScrollMove";

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const { scrollTo } = useScrollMove({})

  return (
    <Animation speedAnimation="x 3s" animationType="fadeIn" >
      <header className="flex flex-row justify-between  z-10  py-3 container  mx-auto items-center px-2">
        <h2 
          className="text-3xl text-blue-700 flex-1 p-4 font-sans font-semibold max-w-xs"
          style={{fontFamily:"Noto Sans Mono"}}
        >
          Daniel Porras
        </h2>
        <div className=" flex-row items-center mx-9 invisible hidden sm:visible sm:flex">
          <span className="link-items-active ">Home</span>
          <span className="link-items"onClick={()=> {scrollTo("skills")}}>
            Skills
          </span>
          <span className="link-items " onClick={()=> {scrollTo("projects")}}>
            Projects
          </span>
          <span className="link-items " onClick={()=> {scrollTo("contact")}}>
            Contact
          </span>   
        </div>
        <a
            className={`rounded-md p-1 transition-all  border border-transparent visible sm:invisible sm:hidden h-fit
                  active:bg-neutral-100
                  hover:border-blue-300 hover:border
                `}
            onClick={() => setMenuBtn(!menuBtn)}
          >
            <img src={"../../images/menu.png"} alt="icon-menu" className="w-10" />
        </a>
      </header>

      <div
        className={` absolute -left-full  w-full  flex flex-col gap-2 visible sm:invisible  sm:hidden  transition-all text-center ${menuBtn && "menu-active"}`}
      >
        <span className="link-items-active" onClick={() => setMenuBtn(false)} >  
          About me
        </span>
        <span className="link-items"onClick={()=> {scrollTo("skills");setMenuBtn(false)}}>
          Skills
        </span>
        <span className="link-items " onClick={()=> {scrollTo("projects"); setMenuBtn(false)}}>
          Projects
        </span>
        <span className="link-items " onClick={()=> {scrollTo("contact"); setMenuBtn(false)}}>
          Contact
        </span>   
      </div>
    </Animation>
  );
};

export default Navbar;
