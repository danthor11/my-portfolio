import React from 'react'

export interface SkillsProps {
    label: string;
    url_image: string;
    stop?: () => void
    continue?: () => void
}

export const Skill = (skills : SkillsProps) => {
    

    return (
    <div 
        className="min-w-fit hover:scale-110 transition-all skill-item relative"
        onMouseEnter={skills.stop}
        onMouseLeave={skills.continue}
    >
        <img src={skills.url_image} alt={skills.label} />
        <h2 className="text-center text-xl text-slate-50 ">{skills.label}</h2>
    </div>
  )
}
