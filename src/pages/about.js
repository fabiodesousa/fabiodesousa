import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from "@emotion/core"


const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: {eq: "resume"}) {
        publicURL
      }
    }
  `)
  return(
    <Layout>
      <SEO title="About" />
      <div>
        <div>
          <h1>About</h1>
        </div>
        <div css={css`
          max-width: 700px;
        `}>
          <p>Fabio DeSousa is Business Operations Manager at Remote and lives in Tampa, Florida. He'll get around to adding to this page at some point.</p>
        </div>
      </div>
    </Layout>
  )
}

export default About;