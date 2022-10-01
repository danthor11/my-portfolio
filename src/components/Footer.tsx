import { Link } from 'gatsby'
import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full  flex flex-col py-4 bg-slate-500 items-center relative'>

      <div className='flex gap-8 my-4'>
        <Link  to="https://github.com/danthor11">
          <img className="icons-social-media" src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>
        </Link>
        <Link to="/">
          <img className="icons-social-media" src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png"/>
        </Link>

        <Link to="/">
          <img className="icons-social-media" src="https://img.icons8.com/material-outlined/30/000000/instagram-new--v1.png"/>
        </Link>

      </div>

      <h2 className='text-lg  text-slate-50 font-semibold'>
        © Todos los Derechos Reservados.
      </h2>

      
    </div>
  )
}
