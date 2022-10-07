import React from 'react'
import { Animation } from '../utils/animation'
import { useScrollMove } from '../hook/useScrollMove'

export const Presentation = () => {
    const {scrollTo} = useScrollMove({})
    return (
        <div className='flex lg:flex-row justify-center container max-w-5xl mx-auto flex-col-reverse px-4 min-h-screen my-4 lg:my-0 gap-12 lg:gap-0'>
            <div className='mx-auto mt-0 self-center'>
                <div className='flex flex-col gap-4 max-w-md px-4' style={{fontFamily: 'Montserrat'}}>
                    <Animation animationType='bounce'  speedAnimation='x 2s'>
                        <h2 className='text-7xl font-bold' >
                            Hello world! I am <span className='text-blue-800'>Daniel</span>.
                        </h2>

                    </Animation>
                    
                    <p className='text-neutral-700 text-justify text-xl max-w-sm '>
                        I develop experiences that make people´s lives simpler through Web apps. I work with HTML5, CSS3, JavaScript, TypeScript, React, NodeJs y Deno.
                    </p>
                </div>
                <div className='flex flex-row gap-1 sm:gap-8 mt-12 px-4 max-w-sm mx-auto'>
                    <button className='py-3 px-6 font-semibold text-xl uppercase bg-blue-600 
                        border border-blue-200 text-white'
                        onClick={()=> {scrollTo("contact")}}
                    >
                        Contact Me!
                    </button>
                    <a className='py-3 px-6 font-semibold text-xl uppercase bg-white 
                        border border-bluebg-blue-700 text-bluebg-blue-700'
                        href={"../../Cv-Daniel_Porras.pdf"}
                        download
                    >
                        Download my CV
                    </a>
                </div>
            </div>
            <Animation speedAnimation='x 2s' animationType='fadeIn' className='self-center '>
                
                    <img 
                        className='border-4 border-slate-900 flex1 presentation-image  mx-auto max-h-96 w-auto object-center transition-all hover:backdrop-filter'
                        src={"../../images/daniel.png"} 
                        alt="my photo" 
                    />
                    
            </Animation>
            
        </div>
    )
}
