import { graphql,  Link,  useStaticQuery } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { useScrollMove } from '../hook/useScrollMove'
import Project from './Project'

export interface ProjectsProps{
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
    <section className=' bg-slate-600 py-8 min-h-screen' id="projects" ref={refProjects}>
        <h2 
            className='text-3xl font-bold text-slate-50 text-center py-4 mb-8 uppercase '
            style={{fontFamily:"Montserrat"}}
        >
            My Projects
        </h2>
        <div className='flex flex-wrap gap-6 justify-evenly items-center mx-auto max-w-5xl mb-6'>
          {data.map((project:ProjectsProps) => (
            <Project {...project} key={project.name}/> 
          ))

          }
        </div>
       
    </section>
  )
}
