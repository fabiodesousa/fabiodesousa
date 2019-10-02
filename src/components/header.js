import React from 'react'
import PropTypes from 'prop-types'
import Headroom from 'react-headroom';
import { Link } from 'gatsby';
import './utility.css';
import { css } from "@emotion/core"
import Hamburger from './hamburger';

const header_links = [
  {to:'/', text:'Work'},
  {to:'/about', text:'About'},
  {to:'/moodboard', text:'Moodboard'}
]

const Header = ({ siteTitle, fontColor, color }) => (
  <Headroom disableInlineStyles>
    <div css={css`
      background-color: ${color};
    `}>
      <div
        css={css`
          margin-left: auto;
          margin-right: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          width: 80vw;
          min-width: 350px;
          max-width: 1200px;
          position:relative;
          color: ${color === 'none' ? 'inherit' : fontColor};
        `}
      >
        <div css={css`
          margin-top: 2rem;
          display:none;
          @media(max-width:768px) {
            display: block;
          }
        `}>
          <Hamburger links={header_links} title={siteTitle} color={color} fontColor={fontColor} />
        </div>
        <div css={css`
          margin-right: auto;
          margin-top: 2rem;
          display: flex;
          width: 220px;
          justify-content: space-between;
          @media(max-width:768px) {
            display: none;
          }
          `
        }>
          {header_links.map((item, i) => (
            <span
              key={i}
              css={css`
                font-size: 0.8rem;
              `}
            >
              <Link key={item.to} to={item.to} css={css`text-decoration: none; color: inherit;`} className='hover-line-animate'>{item.text}</Link>
            </span>
          ))}
        </div>
        <div style={{
          display:'flex',
          margin: '1rem',
          position: 'fixed',
        }}>
          <h1 style={{
            margin:0,
            wrap:'no-wrap',
            fontSize: '3vmax'
          }}>
            <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  color: PropTypes.string,
  fontColor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
