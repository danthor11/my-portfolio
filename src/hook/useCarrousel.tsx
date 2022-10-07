import {useLayoutEffect, useState, useRef,useContext} from 'react'
import { CarrouselContext } from '../context/carrousel'


export const useCarrousel = (carrousel:React.RefObject<HTMLDivElement>) => {
    const ctx = useContext(CarrouselContext)

    useLayoutEffect(() => {
        if(!carrousel.current) return
        
        if(!ctx) return
        const target = carrousel.current 

        const interval : NodeJS.Timer= setInterval(()=> {
        
            const maxWidth  = target.scrollWidth - target.clientWidth
            
            target.scrollLeft += ctx.moveStep
            if(target.scrollLeft === maxWidth){
                ctx.setMoveStep( ctx.moveStep * -1)
            }
            else if(target.scrollLeft === 0){
                ctx.setMoveStep( ctx.moveStep * -1)
            }
            
        },20)

        return () => {
            clearInterval(interval)
        }
        
    }, [ctx?.moveStep])
    
    

    return {

    }
}
