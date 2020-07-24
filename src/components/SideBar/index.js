import React from 'react'
import './style.css'
import { Link, StaticQuery, graphql } from "gatsby"

/**
* @author
* @function SideBar
**/

const SideBar = ({data}) => {
  return(
    <StaticQuery
      query={graphql`
        query BlogPostIndexQuery {
          allMarkdownRemark(limit: 4, sort: {fields: frontmatter___postNumber, order: DESC}) {
            edges {
              node {
                id
                frontmatter {
                  path
                  postNumber
                  title
                  date
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="sideBar">
          <div className="sideBarItem About">
              <div className="cardTopic">Meghna, who?</div>
              <div className="cardBody">
              <img className='aboutPicture' src={require('../../images/about/sidebar.jpg')} />
              <p className='aboutText'>I am Meghna and I burp a lot.</p>
              </div>
          </div>
          <div className="sideBarItem">
              <div className="cardTopic">Let's hang out</div>
              <div className="cardBody socialMediaLinks">
              <ul>
                <li>
                  <a href="mailto:megh1132@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../images/icons/mail.png')} alt='email' />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/megnesium23/" target="_blank">
                    <img src={require('../../images/icons/instagram.png')} alt='instagram' />
                  </a>
                </li>
                <li>
                  <a href="https://www.quora.com/profile/Meghna-Saha-1" target="_blank">
                    <img src={require('../../images/icons/quora.png')} alt='quora' />
                  </a>
                </li>
                <li>
                  <a href="https://in.pinterest.com/megh1132" target="_blank">
                    <img src={require('../../images/icons/pinterest.png')} alt='pinterest' />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/meghna-saha-96451a159/" target="_blank">
                    <img src={require('../../images/icons/linkedin.png')} alt='linkedin' />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MeghnaSaha" target="_blank">
                    <img src={require('../../images/icons/github.png')} alt='github' />
                  </a>
                </li>
              </ul>
              </div>
          </div>
          <div className="sideBarItem">
              <div className="cardTopic">Recent Posts</div>
              <div className="cardBody recentPosts">
                  <ul>
                    {data.allMarkdownRemark.edges.map(post => (
                      <li key={post.node.id}>
                        <Link to={post.node.frontmatter.path}>
                          {post.node.frontmatter.title}
                        </Link> 
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
        </div>
      )}
    />
    
   )

 }

/*export const PageQuery = graphql`
query BlogPostIndexQuery {
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            path
            title
          }
        }
      }
    }
  }
`*/

export default SideBar