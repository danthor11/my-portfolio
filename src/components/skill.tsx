import React,{useContext} from 'react'
import { CarrouselContext} from '../context/carrousel';

export interface SkillsProps {
    label: string;
    url_image: string;
}

export const Skill = (skills : SkillsProps) => {
    const ctx = useContext(CarrouselContext)

    return (
        <div 
            className="min-w-fit hover:scale-110 transition-all skill-item relative"
            onMouseLeave={()=> {console.log("continue");ctx?.continueCarrousel()}}
            onMouseEnter={()=> {console.log("f"); ctx?.stopCarrousel()}}
        >
            <img src={skills.url_image} alt={skills.label} />
            <h2 className="text-center text-xl text-slate-50 ">{skills.label}</h2>
        </div>
    )
}
