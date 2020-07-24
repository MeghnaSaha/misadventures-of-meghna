import React from "react"
import styles from '../styles/home.module.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.container}>
      <div className={[styles.bgimage, styles.img1].join(' ')}></div>
      <div className={[styles.bgimage, styles.img2].join(' ')}></div>
      <div className={[styles.bgimage, styles.img3].join(' ')}></div>
      <div className={[styles.bgimage, styles.img4].join(' ')}></div>
      <div className={[styles.bgimage, styles.img5].join(' ')}></div>
      <div className={[styles.bgimage, styles.img6].join(' ')}></div>

      <div className={styles.bgtext}>
      <h1>Welcome to MeghnaLand!</h1>
      <h4>I blog about stuff that amuses me
        <br/>
        and I hope it amuses you too</h4>
      </div>
    </div>
  </Layout>
)

export default IndexPage
