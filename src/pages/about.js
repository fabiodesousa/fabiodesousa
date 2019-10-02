import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { css } from "@emotion/core"


const About = () => {
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
          <p>Fabio DeSousa is the Analytics and Engineering Manager at Embarc Collective. A Tampa native, Fabio graduated from Columbia University with a Bachelor of Arts in Sociology. Afterwards, Fabio became a Venture for America Fellow and worked for Pack Health, a digital health-coaching startup based in Birmingham, AL, as a Software Engineering Manager.</p>
        </div>
      </div>
    </Layout>
  )
}

export default About;