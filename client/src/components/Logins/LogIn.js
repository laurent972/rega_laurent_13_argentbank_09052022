import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { handleLogin } from '../../api/services';


const SignIn = () => {
    
  const message = document.querySelector('.login.error');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  
  const login = (e) =>{
    e.preventDefault();
    handleLogin(email,password, error, message)
    .then(response => setError(response));
    if(!error=== false) message.innerHTML = '';

    setInterval(() => {
      window.location='/profil'
    }, 350);
  }

    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
        <FontAwesomeIcon icon= {faCircleUser} />
          <h1>Sign In</h1>
          <form onSubmit={login}>
            <div className="input-wrapper">
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" className={error ? "inputError" : 'default'} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className={error ? "inputError" : 'default'} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className='login error'></div>
            <input type="submit" className="sign-in-button" value={'Sign In'} />
          </form>
          
        </section>
      </main>
    );
};

export default SignIn;