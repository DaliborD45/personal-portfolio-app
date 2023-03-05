import React from "react"
import Footer from "../components/footer/footer.component"
import ScrollComponent from "../components/scroll-component/scroll-component"
import Landing from "../screens/landing/landing.screen"
import Technologies from "../components/technologies/technologies.component"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const ContactMe = dynamic(
  () => import("../screens/contact-me/contact-me.screen")
)
const AboutMe = dynamic(() => import("../screens/about-me/about-me.component"))
const Projects = dynamic(() => import("../screens/projects/projects.screen"))
const WhyUs = dynamic(() => import("../screens/why-us/why-us.component"), {
  ssr: false,
})
function Main() {
  return (
    <Suspense fallback={"Loading..."}>
      <ScrollComponent />
      <Landing />
      <Technologies />
      <WhyUs />
      <Projects />
      <AboutMe />
      <ContactMe />
      {/* <Footer /> */}
    </Suspense>
  )
}

export default Main
