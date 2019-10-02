import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticQuery, graphql  } from 'gatsby'
import Img from 'gatsby-image'
import { css } from "@emotion/core"

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MoodTile = ({node}) => {
  console.log('NODE', node)
  return(
    <Img
      css={css`
        width: 300px;
        margin: 0 1rem 1rem 0;
        display: inline-block;
        width: 100%;
      `}
      fluid={node.mood.fluid}
    />
  )
}

const MoodBoard = () => {
  return(
    <StaticQuery
    query={graphql`
      query MoodQuery {
        allContentfulMood {
          edges {
            node {
              contentful_id
              mood {
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <div css={css`
        margin-left: auto;
        margin-right: auto;
        `}>
          <div
            css={css`
              columns: 3 300px;
              column-gap: 1rem;
            `}
          >
            {shuffle(data.allContentfulMood.edges).map(edge => {
              const node = edge.node
              return( 
                <MoodTile key={node.contentful_id} node={node} />
              )
            })}
          </div>
        </div>
      </Layout>
    )}
  />
  )
}

export default MoodBoard;