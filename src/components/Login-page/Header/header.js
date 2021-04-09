import React from 'react';
import topic_icon from '../../../images/Uber.png';
import './header.css';
const Header = () => {
    return(
        <header className="Header">
            <div>
                <img src={topic_icon}>

                </img>
            </div>
            <div>
                <i class="fa fa-align-right"></i>
            </div>
        </header>
    )
}

export default Header;