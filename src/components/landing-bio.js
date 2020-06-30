import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Image from "gatsby-image"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
`

const NameHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0;
  margin-top: 1rem;
`

const LandingBio = () => {
  const data = useStaticQuery(graphql`
    query LandingBioQuery {
      profileImg: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          subtitle
          author
        }
      }
    }
  `)

  const { title, subtitle, author } = data.site.siteMetadata
  const { fixed: profileImg } = data.profileImg.childImageSharp

  return (
    <OuterContainer>
      {console.log(data)}
      <Container>
        <Image
          fixed={profileImg}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={author}
          style={{
            marginBottom: 0,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <NameHeader>{title}</NameHeader>
        <hr />
        <Description>{subtitle}</Description>
      </Container>
    </OuterContainer>
  )
}

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
