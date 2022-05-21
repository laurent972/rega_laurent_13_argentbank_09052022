import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../components/AppContext';


const User = () => {
  const token= useContext(TokenContext)
  let [data, setData] = useState({})
  //Get  data from API
  async function getData(userToken) {
     try{
        let response = await fetch('http://localhost:3001/api/v1/user/profile',{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization": 'Bearer'+ userToken
            },
            })
            data = await response.json();
            return data.body
     }catch(err){
         console.log(err);
     }
    
  }
  // when token loaded, start function
  useEffect(()=>{
    {token ? getData(token).then(response =>{setData(response)}) : console.log('erreur'); }
  },[ token ])
  
  console.log(data);
    return (
     <>
     <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{data.firstName} {data.lastName} </h1>
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
        </>
    );
};

export default User;