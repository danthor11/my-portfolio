
import React from 'react'
import { ProjectsProps } from './Projects'

const Project = (project: ProjectsProps ) => {
 
  return (  
    <div className='flex flex-col bg-slate-400 text-gray-900 pb-4 max-w-xs shadow-sm shadow-slate-600 border-none rounded-md  transition-all 
      hover:shadow-lg hover:scale-105 hover:text-gray-300 hover:bg-slate-500'
      key={project.name}
    >
      <div className='relative'>
        <img 
          src={project.url_image} 
          alt={project.name} 
          className="h-full w-auto bg-slate-50 rounded-t-md object-cover"
          
        />
      </div>
      <h3 className='text-center text-2xl my-3 font-semibold '>{project.name}</h3>
      
      <a 
        href={project.repository} 
        target="_blank"
        rel="noopener noferrer"
        className='repository-link'
      
      >
        <img src='https://img.icons8.com/ios-glyphs/30/000000/github.png' alt="github-icon"/>
      </a>
      
    </div>
  )
}

export default Project
