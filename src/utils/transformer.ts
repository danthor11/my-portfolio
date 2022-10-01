import {GatsbyImageFluidProps} from "gatsby-image"

export const transformQuerie = (query: any) => {
    const { allImageSharp : {edges} } = query

    return edges.map( (edge : any )=> {
        return edge.node.fluid
    })
    
}