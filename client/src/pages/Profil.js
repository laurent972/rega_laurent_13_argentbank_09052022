import React, { useContext, useEffect } from 'react';
import SignIn from '../components/Logins/SignIn';
import User from '../components/User';
import {useSelector} from "react-redux";

  

const Profil = () => {

    const logged = useSelector((state) => state.auth.value);
    console.log(logged);
    return (
        <>
       
           <User /> 
        </> 
    );
};

export default Profil;