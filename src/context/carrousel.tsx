import React , { createContext ,useState} from "react";

export interface CarrouselCtxProps{
    moveStep:number,
    setMoveStep: (number:number) => void,
    stopCarrousel: () => void,
    continueCarrousel: () => void
}

export const CarrouselContext = createContext<CarrouselCtxProps | null>(null);

export const CarrouselContextProvider = ({children}:any) => {
    const [moveStep, setMoveStep] = useState<number>(1)
    const [lastMoveStep, setLastMoveStep] = useState<number>(0)

    const stopCarrousel = () => {
        console.log("stop",moveStep)
        setLastMoveStep(moveStep)
        setMoveStep(0)
    } 

    const continueCarrousel = () => {
        setMoveStep(lastMoveStep)
    }

    return <CarrouselContext.Provider value={{continueCarrousel,stopCarrousel,setMoveStep,moveStep}}>
        {children}
    </CarrouselContext.Provider>
}