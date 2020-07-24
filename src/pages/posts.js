import React from "react"
import { Link, graphql } from "gatsby"
import styles from '../styles/posts.module.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = ({data}) => (
  <Layout>
    <SEO title="Posts" />
    <div className={styles.postsContainer}>
      {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id} className={styles.postPreview}>
              <h3>{post.node.frontmatter.title}</h3>
              <em>Posted on {post.node.frontmatter.date}</em>
              <hr/>
              <p>{post.node.excerpt} <Link to={post.node.frontmatter.path}>Read more</Link></p>
          </div>
      ))}
    </div>
  </Layout>
)

export const PageQuery = graphql`
query BlogIndexQuery {
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            path
            title
            date
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`

export default Posts