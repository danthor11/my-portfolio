import React from 'react'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <div className='flex flex-col  justify-center items-center gap-y-12 gap-x-3 mx-4 mb-6' id='contact'>
        <h2 
          className='uppercase text-3xl text-center font-bold mt-8'
          style={{fontFamily:"Montserrat"}}
        >
          Contact me!
        </h2>

        <ContactForm />

    </div>
  )
}
