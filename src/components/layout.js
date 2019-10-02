import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  min-height: 90vh;
`

const Body = styled("div")`
  width: 80vw;
  min-width: 350px;
  max-width: 1200px;
  margin-bottom: 2rem;
`

const Footer = styled("footer")`
  width: 50vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            primary_background_color
            primary_text_color
            overscroll_background_color
          }
        }
      }
    `}
    render={data => (
      <>
        <Global
          styles={css`
            html {
              background-color: ${data.site.siteMetadata.overscroll_background_color};
              color: ${data.site.siteMetadata.primary_text_color};
            }
            body {
              margin: 0;
              background-color: ${data.site.siteMetadata.primary_background_color};
              color: ${data.site.siteMetadata.primary_text_color};
            }
            template {
              display: none;
            }
            h1, h2, h3, h4, h5, h6 {
              text-transform: none;
            }
          `}
        />
        <Header siteTitle={data.site.siteMetadata.title} color={data.site.siteMetadata.overscroll_background_color} fontColor={data.site.siteMetadata.primary_text_color}/>
        <Wrapper>
          <Body>
            {children}
          </Body>
          <div css={css`
            margin-top: auto;
            padding: 2rem;
            width: 100vw;
            background-color:${data.site.siteMetadata.overscroll_background_color};
            display: flex;
            align-items: center;
            justify-content: center;`
          }>
            <Footer>
                <p>© {new Date().getFullYear()} {'Fabio De Sousa'}</p>
            </Footer>
          </div>
        </Wrapper>
      </>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
