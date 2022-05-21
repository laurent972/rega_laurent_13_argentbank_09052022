import React from 'react';
import SignIn from '../components/Logins/SignIn';
import User from '../components/User';
import { TokenContext } from '../components/AppContext';
import { faTooth } from '@fortawesome/free-solid-svg-icons';


const Profil = () => {



    return (
        <>
            <SignIn />
            <User />
        </> 
    );
};

export default Profil;