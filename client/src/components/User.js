import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { updateProfil } from '../actions/user.actions';
import Accounts from './Accounts';


const User = () => {

  const user = useSelector((state) => state.userReducer.user);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const dispatch = useDispatch();
  const token = localStorage.getItem("userToken");

  const displayEdit = (e) =>{
    setEdit(true)
  }

  const reset = () =>{
    setEdit(false)
    window.location='/profil'
  }

  const handleUpdate = (e) =>{
    e.preventDefault();
    dispatch(updateProfil(firstName,name,token));
    setEdit(false)
  }

    return (
     <>
  
     <main className="main bg-dark">
      <div className="header">
      <h1>Welcome back</h1>
       <div className={edit ? 'hidden' : "default"}>
       <div className={'title1'}>{user.firstName} {user.lastName} </div>
       <br /> 
        <button className="edit-button" onClick={displayEdit}>Edit Name</button>
       </div>

       <div className={edit ? 'default' : "hidden"}>
        <form className='formUpdate' onSubmit={handleUpdate}>
        <div className="input-wrapper">
              <input type="firstName" id="firstName"  onChange={(e) => setFirstName(e.target.value)} placeholder={user.firstName} />
            </div>
            <div className="input-wrapper">
              <input type="name" id="name" onChange={(e) => setName(e.target.value)} placeholder={user.lastName}/>
            </div>
            <br/>
            <input type="submit" className="sign-in-button" value={'Save'} />
            <button className="edit-button" onClick={reset} value={'cancel'} >Cancel</button>
        </form>
       </div>

      </div>
      <Accounts />
    </main>
      
      
    
  </>
    );
};

export default User;