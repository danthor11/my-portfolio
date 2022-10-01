import React from 'react'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <section 
      className='flex flex-col  justify-center items-center gap-y-12 gap-x-3 px-4 pb-6 bg-slate-900' 
      id='contact'
    >
        <h2 
          className='uppercase text-3xl text-center font-bold mt-8 text-slate-300'
          style={{fontFamily:"Montserrat"}}
        >
          Contact me!
        </h2>

        <ContactForm />

    </section>
  )
}
