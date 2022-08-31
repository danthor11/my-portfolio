import * as React from "react"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { MainContent } from "../components/MainContent"
import Navbar from "../components/Navbar"
import { Skills } from "../components/Skills"


const IndexPage = () => {
  return (
      <main>
          <Navbar/>
          <MainContent />
          <Skills/>
          <Contact />
          <Footer/>
      </main>
  )
}

export default IndexPage

export function Head () {
  return <>
    <title>Daniel Porras | Portfolio</title>

  </>

}

