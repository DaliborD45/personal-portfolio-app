import React from "react"
import ScrollComponent from "../components/scroll-component/scroll-component"
import Technologies from "../components/technologies/technologies.component"
import AboutMe from "../screens/about-me/about-me.component"
import ContactMe from "../screens/contact-me/contact-me.screen"
import Landing from "../screens/landing/landing.screen"
import Projects from "../screens/projects/projects.screen"
import WhyUs from "../screens/why-us/why-us.component"

function Main() {
  return (
    <>
      <ScrollComponent />
      <Landing />
      <Technologies />
      <WhyUs />
      <Projects />
      <AboutMe  />
      <ContactMe />
    </>
  )
}

export default Main
