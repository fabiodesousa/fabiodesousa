import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/core";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'gatsby'

export const PureHamburger = ({ children, open, toggleOpen, title, color, fontColor }) => (
  <div
      css={css`
        /*display: ${open ? 'block' : 'none'}*/
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      `}
    >
      <div
        css={css`
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          margin-top: 2.5rem;
          z-index: 5;
        `}
        onClick={() => toggleOpen(!open)}
      >
        {!open ? <FaBars label='Open Menu'/> : <FaTimes css={css`color:${fontColor};`} label='Close Menu'/>}
      </div>
      <div css={css`
        visibility: ${!open ? 'hidden' : 'visible'};
        background: ${color};
        display: flex;
        width: ${open ? '100vw' : '0'};
        height: 100vh;
        min-width: ${open ? '150px' : '0'};
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 5rem;
        padding-bottom: 4rem;
        transition: all 0.2s linear;
      `}>
        <div css={css`
          position: relative;
          padding-left: 2.5rem;
          height: 100%;
        `}>
          {children}
          <h1
            onClick={() => toggleOpen(!open)} 
            style={{
              fontSize: '6vmin',
              marginRight:'2rem',
              position: 'absolute',
              bottom: 0,
              right: 0,
              color: `'${fontColor}'`,
            }}
          >
          <Link to="/"
            css={css`
              font-size:3vmax;
              text-decoration: none;
              color: inherit;
              margin-top: auto;
              margin-right: 2rem;
            `}
          >
            {title}
          </Link>
        </h1>
        </div>
        
      </div>
    </div>
)

export const Hamburger = ({ links, title, color, fontColor }) => {
  const [open, toggleOpen] = useState(false)
  return (
    <PureHamburger open={open} toggleOpen={toggleOpen} title={title} color={color} fontColor={fontColor}>
      {
        links.map((link, i) => (
          <div css={css`
            padding: 0 1rem;
            visibility: ${open ? 'visible' : 'hidden'};
          `}
          key={i}>
            <Link
              to={link.to}
              onClick={() => toggleOpen(!open)}
              css={css`
              color: ${fontColor};
            `}>
              <h2>{link.text}</h2>
            </Link>
          </div>
        ))
      }
    </PureHamburger>
  )
}

Hamburger.propTypes = {
  links: PropTypes.array,
}

export default Hamburger
