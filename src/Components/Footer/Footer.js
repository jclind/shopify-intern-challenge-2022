import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='footer-title'>
        Shopify Front End Developer Intern Challenge
      </div>
      <div className='signature'>
        Created by{' '}
        <a
          href='https://www.jesselind.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Jesse Lind
        </a>{' '}
        with{' '}
        <a
          href='https://reactjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          React.js
        </a>
      </div>
    </footer>
  )
}

export default Footer
