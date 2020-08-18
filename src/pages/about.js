import React from "react"
import ProfileSection from "../components/about/profileSection"
import SkillSection from "../components/about/skillSection"
import SEO from "../components/seo"

function About() {
  return (
    <>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <ProfileSection />
      <SkillSection />
    </>
  )
}

export default About
