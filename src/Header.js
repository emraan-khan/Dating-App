import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@material-ui/core';
import tinderIcon from './files/download.jpg';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className="header_icon" />
            </IconButton>

            <img
                className='header__logo'
                src={tinderIcon}
                alt=''
            />
            <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>

        </div>
    )
}

export default Header
