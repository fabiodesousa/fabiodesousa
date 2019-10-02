import React, {useState} from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticQuery, graphql, Link,  } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { css } from "@emotion/core"

const ProjectTile = ({node}) => {
  const [opacity, setOpacity] = useState(0)
  return(
    <Link to={`/work/${node.slug}`}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      css={css`
        width: 39vw;
        height: 40vh;
        min-width: 300px;
        min-height: 250px;
        margin-top: 1rem;
        max-width: 580px;
        text-decoration: none;
        @media(max-width:768px) {
          width: 90vw;
          margin-left: auto;
          margin-right: auto;
        }
      `}>
        <BackgroundImage Tag="section"
          fluid={node.thumbnail.fluid}
          className={''}
          css={css`
            width:100%;
            background-repeat: repeat-y;
            height: 100%;
            object-fit: contain;
          `}
        >
          <div
            css={css`
              width: 100%;
              display: flex;
              height: 100%;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background-color: white;
              color: black;
              opacity: ${opacity};
              transition: opacity 0.25s linear;
            `}
          >
            {node.title}
          </div>
        </BackgroundImage>
      </Link>
  )
}

const IndexPage = () => {
  return(
    <StaticQuery
    query={graphql`
      query ProjectQuery {
        allContentfulProject(
          sort: {
            fields: [sortOrder]
            order: ASC
          }
        ){
          edges {
            node {
              title
              slug
              sortOrder
              contentful_id
              body {
                body
              }
              thumbnail {
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
              display: flex;
              justify-content: space-between;
              align-items: space-between;
              flex-wrap: wrap;
            `}
          >
            {data.allContentfulProject.edges.map(edge => {
              const node = edge.node
              return( 
                <ProjectTile key={node.contentful_id} node={node} />
              )
            })}
          </div>
        </div>
      </Layout>
    )}
  />
  )
}

export default IndexPage;