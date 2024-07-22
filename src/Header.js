import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@material-ui/core';
import tinderIcon from './files/download.jpg'
function Header() {
  return (
    <div className='Header'>
    <h2>I am a Header.</h2>
    <IconButton>
      <PersonIcon fontSize='large' className="header_icon" />

    </IconButton>

    <img 
        className='header_logo'
        src={tinderIcon}
        alt=''
    />
    <img 
        className='header_logo'
        src={tinderIcon}
        alt=''
    />
    <img 
        className='header_logo'
        src={tinderIcon}
        alt=''
    />
    <img 
        className='header_logo'
        src={tinderIcon}
        alt=''
    />
    <img 
        className='header_logo'
        src={tinderIcon}
        alt=''
    />
    <img 
        className='header_logo'
        src={tinderIcon}
        alt=''
    />
    <img 
        className='header_logo'
        src={tinderIcon}
        alt=''
    />
    <img 
        className='header_logo'
        src={tinderIcon}
        alt=''
    />
    </div>
  )
}

export default Header
