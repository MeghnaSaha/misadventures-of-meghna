/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ReactGa from 'react-ga'

import Hero from "./Hero"
import SideBar from "./SideBar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    ReactGa.initialize('UA-173522347-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <Hero />
      <div>
        <div className='Page'>
          <main style={{width:"100%"}}>{children}</main>
          <SideBar />
        </div>
        <footer>
          © {new Date().getFullYear()}, Built by Meghna Saha
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
