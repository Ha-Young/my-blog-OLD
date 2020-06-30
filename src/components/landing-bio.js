import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-family: "Kurale";

  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23000000' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 5%;
  border-bottom: 0;
  padding-bottom: 0.3em;
  text-decoration: none;
`

const ProfileImg = styled(Image)`
  margin-bottom: 0;
  border-radius: "100%";

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
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
        <Link to="/about">
          <ProfileImg
            fixed={profileImg}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={author}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </Link>
        <NameHeader>{title}</NameHeader>
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
