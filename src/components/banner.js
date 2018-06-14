import React from 'react'
import Link from 'gatsby-link'

const Banner = ({ title, subtitle, hero }) => (
  <div
    css={{
      backgroundImage: `url("${hero}")`,
      backgroundPosition: '90% 20%',
      backgroundSize: 'cover',
      minHeight: 400,
      height: '90vh',
    }}
  >
    <div
      css={{
        paddingLeft: '9rem',
        marginRight: '3rem',
        paddingTop: '25vh',
      }}
    >
      <h1 css={{color:'#000'}}>{title}</h1>
      <h4 css={{marginTop:0, color:'#000'}}>{subtitle}</h4>
    </div>
  </div>
)

export default Banner
