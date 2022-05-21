import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);


    const handleLogin =  (e) =>{
      const message = document.querySelector('.login.error');
        e.preventDefault();
        console.log(email);
        console.log(password);
        
        fetch(`http://localhost:3001/api/v1/user/login`,{
          method:"POST",
          headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({email, password})
        })
        .then((res)=>res.json())
        .then((res) =>{
          console.log(res);
          if(!res.status===200){
            message.innerHTML = res.message;
            setError(true)
          }else{
            console.log(res.body.token);
            localStorage.setItem('userToken', res.body.token)
            //window.location='/'
          }
        } )
        .catch((err) => {
          console.log(err.message);
      })
   
    }

    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
        <FontAwesomeIcon icon= {faCircleUser} />
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
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