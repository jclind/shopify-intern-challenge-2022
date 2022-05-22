import React from 'react'
import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import './Navbar.scss'

const Navbar = ({ isDark, toggleIsDark }) => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='left'>
          <ToggleThemeBtn isDark={isDark} toggleIsDark={toggleIsDark} />
        </div>
        <div className='right'>
          <div className='social-icons'>
            <a
              href='https://github.com/jclind/shopify-intern-challenge-2022'
              className='github-link'
              title='github'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub className='icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/jesseclind/'
              className='linkedin-link'
              title='linkedin'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin className='icon' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
