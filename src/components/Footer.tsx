import { Link } from 'gatsby'
import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full  flex flex-col py-4 bg-slate-500 items-center'>

      <div className='flex gap-8 my-4'>
        <Link  to="/">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>
        </Link>
        <Link to="/">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png"/>
        </Link>

        <Link to="/">
          <img src="https://img.icons8.com/material-outlined/30/000000/instagram-new--v1.png"/>
        </Link>

      </div>

      <h2 className='text-lg  text-slate-800'>
        © Todos los Derechos Reservados.
      </h2>
    </div>
  )
}
