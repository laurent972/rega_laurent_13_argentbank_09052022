import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <>
            <nav className="main-nav">
         
                <NavLink to="/">
                <img src={logo} alt="" width="200" />
                </NavLink>


                <div className='main-nav-item'>
                <NavLink to="/profil">
                        <FontAwesomeIcon icon= {faCircleUser} />Sign In
                    </NavLink>
                   
                    <NavLink to="/profil">
                        <FontAwesomeIcon icon= {faRightFromBracket} />
                         Sign Out
                    </NavLink>
                </div>

            </nav>

            
        </>
    );
};

export default Header;