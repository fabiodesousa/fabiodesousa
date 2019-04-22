import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    css={{
      background: 'white',
      marginBottom: '0',
      minHeight: 40,
      top: 0,
      right: 0,
      left: 0,
      position: 'fixed',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div css={{padding: '.5rem 1.0875rem'}}>
      <h4 css={{ marginTop: 0, marginBottom: 0 }}>
        <Link
          to="/"
          css={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h4>
    </div>
    <a href="https://staycalma.com" css={{marginLeft:'auto'}}>Calma</Link>
    <Link to="/blog/" css={{marginLeft: '1rem'}}>Blog</Link>
    <Link to ="/contact/" css={{marginLeft: '1rem', marginRight: '1rem'}}>Contact</Link>
    
  </div>
)

export default Header
