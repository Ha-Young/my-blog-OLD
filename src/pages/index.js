import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site

  useIntersectionObserver()

  return (
    <Layout>
      <SEO title="Home" keywords={siteMetadata.keywords} />
      <LandingBio />
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        keywords
      }
    }
  }
`
