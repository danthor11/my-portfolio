import { graphql, useStaticQuery } from "gatsby";
import React, { useLayoutEffect, useRef, useState } from "react";
import { CarrouselContextProvider } from "../context/carrousel";
import { useCarrousel } from "../hook/useCarrousel";
import { Skill , SkillsProps} from "./skill";



export const Skills = () => {
  const carrouselRef = useRef<HTMLDivElement>(null)
  const carrousel = useCarrousel(carrouselRef)

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
    <section className="bg-slate-900 w-full py-6" id="skills">
      <h2 
        className="text-3xl font-bold text-slate-50 text-center mt-4 mb-6 uppercase"
        style={{fontFamily:"Montserrat"}}
      >
        Skills
      </h2>
      <CarrouselContextProvider>
        <div className=" carrousel-container">
          <div 
            className="flex gap-6 gap-x-10 px-4 py-2 overflow-hidden max-w-xs  sm:max-w-lg md:max-w-lg  lg:max-w-4xl mx-auto carrousel outline  outline-2 outline-gray-600"
            ref={carrouselRef}
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
