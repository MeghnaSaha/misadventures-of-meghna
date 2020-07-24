import React, { useState, useEffect } from "react"
import Layout from '../components/layout'
import * as JsSearch from "js-search"
import { Link } from "gatsby";
import styles from '../styles/search.module.css'

const Search = ({data}) => {

  const[postList, setPostList] = useState(data.allMarkdownRemark.edges);
  const[searchQuery, setSearchQuery] = useState('');
  const[search, setSearch] = useState([]);
  const[searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    rebuildIndex()
  },[])

  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search(['node', 'id'])
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex()

    dataToSearch.addIndex(['node', 'frontmatter', 'title']) // sets the index attribute for the data
    dataToSearch.addIndex(['node', 'html']) // sets the index attribute for the data
    dataToSearch.addDocuments(postList) // adds the data to be searched
    console.log(dataToSearch)
    
    setSearch(dataToSearch)
  }

  const searchData = (e) => {
    const queryResult = search.search(e.target.value)
    setSearchQuery(e.target.value)
    setSearchResults(queryResult)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const queryResults = searchQuery === "" ? postList : searchResults

  return(
    <Layout>
      <div className={styles.container}>
        <h2>
          A little picky today, are we?
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            id="Search"
            value={searchQuery}
            onChange={searchData}
            placeholder="Enter your search here"
            className={styles.searchBar}
          />
        </form>
        <hr />
        <div> Number of posts found: {queryResults.length}</div>
        <div className={styles.postsContainer}>
          {queryResults.map(post => (
            <div key={post.node.id} className={styles.postPreview}>
              <h3>{post.node.frontmatter.title}</h3>
              <em>Posted on {post.node.frontmatter.date}</em>
              <hr/>
              <p>{post.node.excerpt} <Link to={post.node.frontmatter.path}>Read more</Link></p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )

}

export const PageQuery = graphql`
query SearchIndexQuery {
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            path
            title
            date
          }
          html
          excerpt
        }
      }
    }
  }
`

export default Search