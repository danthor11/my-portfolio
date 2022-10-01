import * as React from "react"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { MainContent } from "../components/MainContent"
import Navbar from "../components/Navbar"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { CarrouselContextProvider } from "../context/carrousel"
import icon from "../images/deno.png"

const IndexPage = () => {
  return (
    <CarrouselContextProvider>
      <main>
          <Navbar />
          <MainContent />
          <Skills/>
          <Projects />
          <Contact />
          <Footer/>
      </main>
    </CarrouselContextProvider>
  )
}

export default IndexPage

export function Head () {
  return <>
    <title>Daniel Porras | Portfolio</title>
    <link rel="icon" href={icon} type="image/x-icon" />
  </>

}

