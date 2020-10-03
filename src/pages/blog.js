import React, { useMemo } from "react"
import _ from "lodash"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { Category } from "../components/category"
import { useCategory } from "../hooks/useCategory"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { useRenderedCount } from "../hooks/useRenderedCount"
import { useScrollEvent } from "../hooks/useScrollEvent"
import * as Dom from "../utils/dom"
import * as EventManager from "../utils/event-manager"
import { CATEGORY_TYPE } from "../constants"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const PostBlock = styled.div`
  margin: 1em 0em;
  padding: 2em;
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

const BASE_LINE = 80

function getDistance(currentPos) {
  return Dom.getDocumentHeight() - currentPos
}

const IndexPage = ({ data, location }) => {
  const { siteMetadata } = data.site
  const { countOfInitialPost } = siteMetadata.configs
  const posts = data.allMarkdownRemark.edges.filter(({ node }) => {
    const rawDate = node.frontmatter.rawDate
    const date = new Date(rawDate)
    return date < new Date()
  })

  const categories = useMemo(
    () => _.uniq(posts.map(({ node }) => node.frontmatter.category)),
    []
  )

  const [count, countRef, increaseCount] = useRenderedCount()
  const [category, selectCategory] = useCategory()

  useIntersectionObserver()
  useScrollEvent(() => {
    const currentPos = window.scrollY + window.innerHeight
    const isTriggerPos = () => getDistance(currentPos) < BASE_LINE
    const doesNeedMore = () =>
      posts.length > countRef.current * countOfInitialPost

    return EventManager.toFit(increaseCount, {
      dismissCondition: () => !isTriggerPos(),
      triggerCondition: () => isTriggerPos() && doesNeedMore(),
    })()
  })

  const refinedPosts = useMemo(() =>
    posts
      .filter(
        ({ node }) =>
          category === CATEGORY_TYPE.ALL ||
          node.frontmatter.category === category
      )
      .slice(0, count * countOfInitialPost)
  )

  return (
    <Layout>
      <SEO title="Blog" />
      <Category
        categories={categories}
        category={category}
        selectCategory={selectCategory}
      />
      <Content>
        <h1>Blog</h1>
        {console.log("category", category)}
        {refinedPosts.map(({ node }) => (
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
        configs {
          countOfInitialPost
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200, truncate: true)
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
            category
            draft
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
