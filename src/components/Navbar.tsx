import { Link } from "gatsby"
import React from "react"
import { Animation } from "../utils/animation"


const Navbar = () => {
  return (
    <Animation speedAnimation="x 2s" animationType="slideInDown" >
      <header className="flex flex-row w-full justify-between  rounded-xl py-3 container mx-auto">
          <h2 className="text-xl text-blue-700 flex-1 p-4 font-sans font-semibold">
            Daniel Porras
            
          </h2>
          <div className="flex flex-row items-center mx-9">
              <span className="link-items  ">
                Home
              </span>
                <span className="link-items  ">
                  <a href="#skills">
                      Skills
                  </a>
                </span>
              <span className="link-items ">
                Projects
              </span>
              <span className="link-items ">
                <a href="#contact">
                  Contact

                </a>
              </span>

          </div>
      </header>
    </Animation>
  )
}

export default Navbar