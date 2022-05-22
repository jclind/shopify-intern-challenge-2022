import React from 'react'
import { BsCircle, BsMoonStars, BsSun } from 'react-icons/bs'
import './ToggleThemeBtn.scss'

const ToggleThemeBtn = ({ isDark, toggleIsDark }) => {
  return (
    <button
      type='button'
      className='light-dark-toggle-btn btn'
      onClick={() => toggleIsDark()}
      aria-label='Toggle Theme'
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
