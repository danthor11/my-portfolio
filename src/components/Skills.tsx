import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { CarrouselContextProvider } from "../context/carrousel";
import { useCarrousel } from "../hook/useCarrousel";
import { useScrollMove } from "../hook/useScrollMove";
import { Skill , SkillsProps} from "./skill";



export const Skills = () => {
  const carrouselRef = useRef<HTMLDivElement>(null)
  const carrousel = useCarrousel(carrouselRef)
  const skillsRef = useRef<HTMLElement>(null)
  useScrollMove({ref:skillsRef})

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


  return (
    <section className="bg-slate-900 w-full py-6" id="skills" ref={skillsRef}>
      <h2 
        className="text-3xl font-bold text-slate-50 text-center py-4 mt-4 mb-6 uppercase"
        style={{fontFamily:"Montserrat"}}
      >
        Skills
      </h2>
      <CarrouselContextProvider>
        <div className=" carrousel-container">
          <div 
            className="flex gap-6 gap-x-10 px-4 py-2 overflow-hidden max-w-xs  sm:max-w-lg md:max-w-lg  lg:max-w-4xl mx-auto carrousel outline  outline-2 outline-gray-600 mb-6"
            ref={carrouselRef}
            style={{borderRadius:"1px"}}
          >
            {data.map(({label,url_image}:SkillsProps) => (
              <Skill key={url_image} label={label} url_image={url_image} />
            ))}
          </div>
        </div>
      </CarrouselContextProvider>
    </section>
  );
};
