import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Logout from './Logins/Logout';


const Header = () => {
    const user = useSelector((state) => state.userReducer.user);
    const token = localStorage.getItem("userToken");
    return (
        <>
            <nav className="main-nav">
         
                <NavLink to="/">
                <img src={logo} alt="" width="200" />
                </NavLink>

                <div className='main-nav-item'>

                
                 {token ? (
                      <>
                   <NavLink to="/profil">
                    <FontAwesomeIcon icon= {faCircleUser} />
                        {user.firstName}
                    </NavLink>
                   
                    <NavLink to="">
                        <FontAwesomeIcon icon= {faRightFromBracket} />
                        <Logout/>
                    </NavLink>
                    </>    
                    ):(
 
                      <NavLink to="/signin">
                      <FontAwesomeIcon icon= {faCircleUser} />
                      Sign In
                     </NavLink>
                    )
                  
                   }
                  
                </div>
                 
            </nav>

            
        </>
    );
};

export default Header;