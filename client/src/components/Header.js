import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


const Header = () => {
  
  
        const user = useSelector((state) => state.user.value)
        const logged = useSelector((state) => state.auth.value);
        console.log(logged,user);
    return (
        <>
            <nav className="main-nav">
         
                <NavLink to="/">
                <img src={logo} alt="" width="200" />
                </NavLink>


                <div className='main-nav-item'>
               
                {logged ? (
                 
                 <>
                   <NavLink to="/profil">
                    <FontAwesomeIcon icon= {faRightFromBracket} />
                    {user.firstName}
                    </NavLink>
                   
                    <NavLink to="">
                    <FontAwesomeIcon icon= {faRightFromBracket} />
                     Sign out
                    </NavLink>
                    </>    
                 ) : (   
                  
                      <NavLink to="/profil">
                      <FontAwesomeIcon icon= {faCircleUser} />
                      Sign In
                  </NavLink>
                    )} 
                  
                </div>
                 
            </nav>

            
        </>
    );
};

export default Header;