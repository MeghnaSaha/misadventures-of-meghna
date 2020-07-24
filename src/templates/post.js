import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import styles from '../styles/post.module.css'

/**
* @author
* @function Template
**/

export default function Template({data}){
    const post = data.markdownRemark
    return(
        <Layout>
            <SEO title="Post" />
            <div className={styles.postContainer}>
                <h1>{post.frontmatter.title} </h1>
                <em>Posted on {post.frontmatter.date}</em>
                <br />
                <br />
                <hr/>
                <div className={styles.postContent} dangerouslySetInnerHTML={{__html:post.html}}/>
            </div>
        </Layout>
    )
 }

export const PostQuery = graphql`
query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path: {eq: $path}}){
        html
        frontmatter{
            path
            title
            date
        }
    }
}
`
