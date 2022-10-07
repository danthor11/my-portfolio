import { Link } from 'gatsby'
import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full  flex flex-col py-4 bg-slate-500 items-center relative'>

      <div className='flex gap-8 my-4'>
        <a  href="https://github.com/danthor11" target="_blank" rel="noopener noreferrer">
          <img className="icons-social-media" src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>
        </a>
        <a href="https://www.linkedin.com/in/danielporrasdev/" target="_blank" rel="noopener noreferrer">
          <img className="icons-social-media" src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png"/>
        </a>

        <a href="https://www.instagram.com/danieljpb1/" target="_blank" rel="noopener noreferrer">
          <img className="icons-social-media" src="https://img.icons8.com/material-outlined/30/000000/instagram-new--v1.png"/>
        </a>

      </div>

      <h2 className='text-lg  text-slate-50 font-semibold'>
        © Todos los Derechos Reservados.
      </h2>

      
    </div>
  )
}
