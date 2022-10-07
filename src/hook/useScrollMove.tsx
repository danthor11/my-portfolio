import { useLayoutEffect, useRef , useContext,useEffect} from "react";
import { SectionsPositionContext } from "../context/sectionsPosition";

interface useScrollProps {
    ref?: React.RefObject<HTMLElement> | null,
    dependencies?: []
}



export const useScrollMove = ({ref=null,dependencies=[]} : useScrollProps ) => {
    const sectionCtx = useContext(SectionsPositionContext)

    const scrollTo = (nameSection: string) => {
        console.log(nameSection)
        const sectionFinded = sectionCtx.position?.filter(position => position.name === nameSection)
        console.log(sectionCtx,sectionFinded)
        if(sectionFinded){
            const {x,y} = sectionFinded[0].position
            window.scrollTo(x,y)
        }
    }

    const getScrollPosition = ({ element, useWindow }: any) => {
        const isBrowser = typeof window !== `undefined`;
      
        if (!isBrowser) return { x: 0, y: 0 };
      
        const target = element ? element.current : document.body,
          position = target.getBoundingClientRect();
      
        return useWindow
          ? { x: window.scrollX, y: window.scrollY }
          : { x: position.left, y: position.top };
    }

    useEffect(() => {
    
        if(!ref?.current) return

        const elPosition = getScrollPosition({element:ref})

        sectionCtx.addPosition({
            name:ref.current.id,
            position: elPosition
        })
      
    }, [])
    

    useLayoutEffect(() => {
        if(!ref) return
        
        window.addEventListener(`scroll`, ()=>{});

        return () => window.removeEventListener(`scroll`, ()=>{})
    },dependencies);

    return {
        scrollTo,
        getScrollPosition
    };
};
