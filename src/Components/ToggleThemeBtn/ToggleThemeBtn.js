import React from 'react'
import { BsCircle, BsMoonStars, BsSun } from 'react-icons/bs'
import './ToggleThemeBtn.scss'

const ToggleThemeBtn = ({ isDark, setIsDark }) => {
  return (
    <button
      className='light-dark-toggle-btn btn'
      onClick={() => setIsDark(!isDark)}
    >
      <BsCircle
        className={isDark ? 'icon circle-icon dark' : 'icon circle-icon light'}
      />
      <BsMoonStars
        className={
          isDark
            ? 'icon indicator-icon dark toggle'
            : 'icon indicator-icon dark'
        }
      />
      <BsSun
        className={
          !isDark
            ? 'icon indicator-icon light toggle'
            : 'icon indicator-icon light'
        }
      />
    </button>
  )
}

export default ToggleThemeBtn
