import React from 'react'
import "../App.css";
import { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';

const Profile = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='container'>
      <div className="inner">
        <img className='images' src={"https://picsum.photos/800/800"} alt="profile-pic" width={200} />
        <h1>{currentUser?.displayName}</h1>
        <p>{currentUser?.email}</p>

      </div>
    </div>
  )
}

export default Profile