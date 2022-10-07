import React,{useState} from 'react'

interface Position {
    x:  number,
    y:  number
}

interface PositionProps {
    name: string,
    position: Position 
}

interface SectionsPositionContextProps{
    position?: PositionProps[] ,
    setPosition?: React.Dispatch<React.SetStateAction<PositionProps[] >>,
    addPosition: (newPosition: PositionProps) => void
}

export const SectionsPositionContext = React.createContext<SectionsPositionContextProps>({
    position: [],
    addPosition: (newPosition: PositionProps) => {}
})



export const SectionPositionProvider = ({children}: any) => {
    const [position, setPosition] = useState<Array<PositionProps>>([])

    const addPosition = (newPosition : PositionProps) => {
        setPosition(prev => [...prev,newPosition])   
    }

   

    return <SectionsPositionContext.Provider value={{
        position,
        setPosition,
        addPosition
    }}>
        {children}
    </SectionsPositionContext.Provider>
} 
