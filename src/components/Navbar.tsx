import React from "react"

const Navbar = () => {
  return (
    <header className="flex flex-row w-full justify-between  rounded-xl py-3 container mx-auto">
        <h2 className="text-xl text-blue-700 flex-1 p-4 font-sans font-semibold">
          {//Daniel Porras*/
          }
        </h2>
        <div className="flex flex-row items-center mx-9">
            <span className="link-items  ">
              Home
            </span>
            <span className="link-items  ">
              About me
            </span>
            <span className="link-items ">
              Projects
            </span>
            <span className="link-items ">
              Contact
            </span>

        </div>
    </header>
  )
}

export default Navbar