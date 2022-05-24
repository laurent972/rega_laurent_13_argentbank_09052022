import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import loader from '../assets/img/loading.gif';
import { getData } from '../api/services';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../reducers/user.reducer';

const User = () => {
 
  const dispatch = useDispatch();
  const [isloaded, setIsLoaded] = useState(false);
  const user = useSelector((state) => state.user.value);
  const logged = useSelector((state) => state.auth.value)

  
    useEffect(()=>{
        getData().then(response => dispatch(getUserInfo(response)));
        setIsLoaded(true)
    }, [])

    console.log(user,isloaded);

    return (
     <>
     {isloaded && 
      
     <main className="main bg-dark">
      <div className="header">
       
        <h1>Welcome back<br /> {user.firstName} {user.lastName} </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  }

    <img src={loader} alt="" />
    
  </>
    );
};

export default User;