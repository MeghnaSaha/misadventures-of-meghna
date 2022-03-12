import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/about.module.css"

/**
* @author
* @function About
**/

const About = () => (
    <Layout>
    <SEO title="About" />
    <div className={styles.container}>
      <h1>oh hi, it's me!</h1>
      <em>
        Words fall short to explain my bewildered excitement as to why you want to know me,
      </em>
      <br/>
      <em>
        but they absolutely don't fall short as I tell you the story of me.
      </em>
      <br />
      <br />
      <br />
      <img src={require('../images/about/aboutpage1.jpg')} alt='happy picture' />
      <div className={styles.aboutContent}>
        <p>
          I'm an average Indian girl in my early twenties. While I work full time as a Software Engineer at Google,
          I blog to unwind. Well, partially to unwind, and partially because I feel it would be the greatest 
          atrocity of all time to keep from the world my tales of misadventurous adventures.
          <br/>
          <br/>
          I was born in the city of old worldly charm, Kolkata. I was the only child of two perenially working 
          parents, but I seldom remember myself being lonely. I was raised there until I came to Mumbai in the year 
          2005. I completed the rest of my schooling in Mumbai, where my hobbies included watching Pavitra Rishta on
          TV, reading novels, mall hopping, window shopping and actively avoiding fast balls and sport grounds. When
          the time came, like most students with no idea of what they wish to pursue, I took up the Sciences. Soon, 
          I ended up in an engineering college in a quaint little city called Bhubaneswar.
        </p>
        <p>
          College was a whirlwind of memories, each leaving behind a bittersweet taste. There were so many societies 
          to join, so many fests to attend, so many activities to partake in, and so little time. I consistently tried 
          to broaden my horizons by trying my hand at almost anything and everything. Soon came the happy realization, 
          that I wasn't really the jack of all trades. So I went ahead and bought myself a glass box, to sit inside and 
          look at the world from. 
          <br/>
          <br/>
          I identify myself as a not so discreet passive observer with a crap ton of half baked opinons. As life goes on, 
          with me in it, I see so much around me that never fails to amaze me, that never fails to amuse me. I invite you 
          to come along with me in my journey, as I write about whatever I can make of the world as I view it inside my 
          little glass box with my pink tinted glasses on!
        </p>
      </div>
    </div>
  </Layout>
)

export default About