import React from 'react'
import './Header.css'
import selfPhoto from "../images/selfPhoto.jpg"

function Header() {
  return (
    <div id='Header'>
        <div className='Header-Left'>
            <img src={selfPhoto} id='PersonalPhoto' alt='Varun Selfie' />
        </div>
        <h1 id='MidNameDisplay'>Varun Balan</h1>
        <div className='Header-Right'>
            <button>Resume</button>
            <button>Projects</button>
            <button>About Me</button>
        </div>
    </div>
  )
}

export default Header