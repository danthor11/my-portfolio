import * as React from "react"
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

