import React from 'react';
import Link from 'gatsby-link';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/lib/fa';

const Footer = ({ siteTitle }) => (
  <div
    css={{
      background: 'lightgrey',
      minHeight: 100,
      width: '100%',
      position: 'relative',
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 0,
      paddingTop: '0.5rem',
    }}
  >
    <a target="_blank" href="https://twitter.com/defabio_desousa" css={{marginLeft:'auto'}}><FaTwitter /></a>
    <a target="_blank" href="https://www.instagram.com/defabio_desousa/" css={{marginLeft: '1rem'}}><FaInstagram /></a>
    <a target="_blank" href="https://github.com/fabiodesousa" css={{marginLeft: '1rem', marginRight: '1rem'}}><FaGithub /></a>
  </div>
)

export default Footer
