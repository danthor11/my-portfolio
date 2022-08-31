import React from 'react'
import { Animation } from '../utils/animation'

export const Presentation = () => {
  return (
    <div className='flex lg:flex-row container justify-around mx-auto py-3 flex-col-reverse px-4 '>
        <div className='mx-auto mt-8 '>
            <div className='flex flex-col gap-4 max-w-md' style={{fontFamily: 'Montserrat'}}>
                <Animation animationType='bounce'  speedAnimation='x 2s'>
                    <h2 className='text-7xl font-bold' >
                        Hola, <br/>soy <span className='text-blue-800'>Daniel</span>,<br/> Frontend Developer.
                    </h2>

                </Animation>
                

                
                <p className='text-neutral-700 text-justify text-xl'>I develop experiences that make people´s lives simpler through Web apps. I work with HTML5, CSS3, JavaScript, TypeScript, React, NodeJs y Deno.</p>
            </div>
            <div className='flex flex-row gap-8 mt-16'>
                <button className='py-3 px-6 font-semibold text-xl uppercase bg-white border border-black'>
                    Hire me
                </button>
                <button className='py-3 px-6 font-semibold text-xl uppercase bg-black border border-white text-white'>
                    See my projects
                </button>
            </div>
        </div>
        
        <img 
            className=' border-4 border-black presentation-image  mx-auto   max-h-80 w-auto self-center'
            src="https://th.bing.com/th/id/R.28ce0aa32b546ea1fda3570ba0975fb4?rik=uxgC9h9KVBtioA&pid=ImgRaw&r=0" 
            alt="my photo" 
        />
        
    </div>
  )
}
