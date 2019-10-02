import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContentfulRichText from '../components/ContentfulRichText'
import { css } from "@emotion/core"

const Project = ({ data }) => {
  const project = data.contentfulProject
  return(
    <Layout>
      <SEO title={project.title} />
      <div>
          <h1>{project.title}</h1>
          <Img style={{margin:`1rem 0 1rem 0`}}fluid={project.thumbnail.fluid}/>
          <div
            css={css`
              width: 70%;
              max-width: 800px;
              min-width: 300px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 2rem;
            `}
          >
            <ContentfulRichText body={project.body} />
          </div>
      </div>
    </Layout>
)}

export default Project

export const query = graphql`
  query($contentful_id: String!) {
    contentfulProject(contentful_id: {eq:$contentful_id}) {
      contentful_id
      title
      subtitle
      body {
        json
      }
      thumbnail {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }`