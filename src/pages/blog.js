import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const PostBlock = styled.div`
  margin: 1em 0em;
  padding: 1em;
  border-radius: 1em;
  border: 1px solid white;
  transition: all 0.7s;
  &:hover {
    background-color: #f2f0d5;
    border: 1px dashed black;
  }
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(244, 243, 232, 0.15),
    rgba(244, 243, 232, 0.8) 100%,
    rgba(244, 243, 232, 0.25)
  );
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <PostBlock key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
                <div>
                  <ArticleDate>{node.frontmatter.date}</ArticleDate>
                  <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                </div>
                <p>{node.excerpt}</p>
              </Link>
            </PostBlock>
          ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
