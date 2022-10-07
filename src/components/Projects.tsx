import { graphql,  Link,  useStaticQuery } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { useScrollMove } from '../hook/useScrollMove'
import Project from './Project'

interface ProjectsProps{
  name: string
  url_image: string
  repository: string
  url_page?: string
}

export const Projects = () => {
  const refProjects = useRef<HTMLElement>(null)
  useScrollMove({ref:refProjects})

  const {projectsJson:{data}  } = useStaticQuery(graphql`
    query MyProjects {
      projectsJson{
        data{
          name
          url_page
          repository
          url_image
        }
      }
    }
  `)


  return (
    <section className=' bg-slate-600 py-8' id="projects" ref={refProjects}>
        <h2 
            className='text-3xl font-bold text-slate-50 text-center py-4 uppercase '
            style={{fontFamily:"Montserrat"}}
        >
            My Projects
        </h2>
        <div className='flex flex-wrap gap-6 justify-evenly items-center mx-auto max-w-5xl'>
          {data.map((project:ProjectsProps) => (
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
          ))

          }
        </div>
       
    </section>
  )
}
