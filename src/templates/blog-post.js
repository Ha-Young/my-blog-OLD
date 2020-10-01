import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Utterances from "../utils/uterrances"
import "katex/dist/katex.min.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(244, 243, 232, 0.15),
    rgba(244, 243, 232, 0.8) 100%,
    rgba(244, 243, 232, 0.25)
  );
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.5rem 0;
  }
  p ~ h1 {
    margin-top: 5rem;
  }
  p ~ h2 {
    margin-top: 4.5rem;
  }
  p ~ h3 {
    margin-top: 4rem;
  }
  p ~ h4 {
    margin-top: 3.5rem;
  }
  p ~ h5 {
    margin-top: 3rem;
  }
  p ~ h6 {
    margin-top: 2.5rem;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
      <Utterances repo="Ha-Young/my-blog-old" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
