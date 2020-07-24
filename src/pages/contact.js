import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../styles/contact.module.css'

/**
* @author
* @function Contact
**/

const Contact = () => (
    <Layout>
    <SEO title="Contact" />
    <div className={styles.container}>
      <h2>Meghna is a social butterfly!</h2>
      <h4>Plot twist: Her current status is a cocoon.</h4>
      <br />
      <br />
      <p>I'm not a mistress of the mailbox game, but I try. I would love to hear from you, and 
        if you want me to hear from you too, do drop me a message at any of the following platforms.</p>
      <ul className={styles.socialMediaLinks}>
        <li>
          <a title='Email' href="mailto:megh1132@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../images/icons/mail.png')} alt='email' />
          </a>
        </li>
        <li>
          <a title='Instagram' href="https://www.instagram.com/megnesium23/" target="_blank">
            <img src={require('../images/icons/instagram.png')} alt='instagram' />
          </a>
        </li>
        <li>
          <a title='Quora' href="https://www.quora.com/profile/Meghna-Saha-1" target="_blank">
            <img src={require('../images/icons/quora.png')} alt='quora' />
          </a>
        </li>
        <li>
          <a title='Pinterest' href="https://in.pinterest.com/megh1132" target="_blank">
            <img src={require('../images/icons/pinterest.png')} alt='pinterest' />
          </a>
        </li>
        <li>
          <a title='Linkedin' href="https://www.linkedin.com/in/meghna-saha-96451a159/" target="_blank">
            <img src={require('../images/icons/linkedin.png')} alt='linkedin' />
          </a>
        </li>
        <li>
          <a title='Github' href="https://github.com/MeghnaSaha" target="_blank">
            <img src={require('../images/icons/github.png')} alt='github' />
          </a>
        </li>
      </ul>
    </div>
    

  </Layout>
)

export default Contact