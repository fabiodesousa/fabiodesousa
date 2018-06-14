import React from 'react'
import Link, { navigateTo } from 'gatsby-link'

const Tile = ({ title, img, img_alt, subtitle, link, link_text }) => (
  <div
    css={{
      marginTop: '1rem',
      marginBottom: '1rem',
      paddingTop: '0.5rem',
      maxWidth: 400,
      ':hover': {
        cursor: 'pointer',
        transition: 'box-shadow .3s',
        borderRadius: '2px',
        boxShadow: '0 0 11px rgba(33,33,33,.2)'
      }
    }}
    onClick={ () => navigateTo(link)}
  >
    <h2
      css={{
        marginTop: 0,
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        marginBottom: '0.5rem'
      }}
    >
      {title}
    </h2>
    <img src={img} alt={img_alt} />
    <p
      css={{
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        paddingBottom: '0.5rem',
        marginBottom: 0,
      }}
    >
      {subtitle + ' '} 
      <Link to={link}>{link_text}</Link>
    </p>
  </div>
);

export default Tile
