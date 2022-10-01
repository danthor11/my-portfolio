import { graphql ,useStaticQuery} from 'gatsby'
import React, {useEffect} from 'react'
import Img  from  "gatsby-image/withIEPolyfill"
import { transformQuerie } from '../utils/transformer'


const Project = () => {
  const data = transformQuerie(useStaticQuery(graphql`
    query getImages {
      allImageSharp {
        edges {
          node {
            fluid {
              src
              originalName
              originalImg
            }
          }
        }
      }
    }
  `))
  
  
  
  return (  
    <div className='container max-w-3xl'>
      
        {data.map((img : any) => (<Img fixed={img.src}   alt={img.originalName} key={img.src }  objectFit="cover"/>))}
    </div>
  )
}

export default Project
