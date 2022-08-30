import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Skill , SkillsProps} from "./skill";



export const Skills = () => {
  const [moveStep, setMoveStep] = useState<number>(1)
  const [lastMoveStep, setLastMoveStep] = useState<number>(0)
  const carrousel = useRef<HTMLDivElement>(null)

  const {skillsJson:{data}} = useStaticQuery(graphql`
    query MyQuery {
      skillsJson {
        data {
          label
          url_image
        }
      }
    }
  `);

  useLayoutEffect(() => {
    
    if(!carrousel.current) return

    const target = carrousel.current 

    const interval : NodeJS.Timer= setInterval(()=> {
      
        const maxWidth  = target.scrollWidth - target.clientWidth
        
        target.scrollLeft += moveStep
        if(target.scrollLeft === maxWidth){
          setMoveStep( moveStep * -1)
        }
        else if(target.scrollLeft === 0){
          setMoveStep( moveStep * -1)
        }
        
      
    },20)

    return () => {
      clearInterval(interval)
    }
    
  }, [moveStep])
  
  const stopCarrousel = () => {
    setLastMoveStep(moveStep)
    setMoveStep(0)
  } 

  const continueCarrousel = () => {
    setMoveStep(lastMoveStep)
    
  }

  return (
    <div className="bg-slate-900 w-full py-6">
      <h2 className="text-3xl font-semibold text-slate-50 text-center mt-4 mb-6 capitalize">
        Skills
      </h2>
      <div 
        className="flex gap-6  px-4 py-2 overflow-hidden max-w-2xl mx-auto carrousel "
        ref={carrousel}
      >
        {data.map(({label,url_image}:SkillsProps) => (
          <Skill key={label}  label={label} url_image={url_image} stop={stopCarrousel} continue={continueCarrousel}/>
        ))}
      </div>
    </div>
  );
};
