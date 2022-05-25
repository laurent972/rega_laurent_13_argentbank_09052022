import React from 'react';
import cookie from 'js-cookie'

const Logout = () => {

    const logout = async() =>{
        localStorage.removeItem("userToken");
        window.location='/'
    }

    return (
        <div onClick={logout}>
            Sign Out
        </div>
    );
};

export default Logout;