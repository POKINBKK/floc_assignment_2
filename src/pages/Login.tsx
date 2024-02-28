import React, { useState } from 'react';
import '../App.css';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const checkUsernamePassword = () => {
    console.log(username, password);
  }
  return (
    <div className={'login-body'}>
      <div className={'login-box drop-shadow-lg'}>
        <div className={'text-4xl font-semibold mx-auto w-fit pt-16'}>Login</div>
        <div className={'px-12 pt-6'}>
          <input className={'input-box rounded-md'} type='text' placeholder='Your email' onChange={(e) => setUsername(e.target.value)}/>
          <br/>
          <input className={'input-box rounded-md mt-4'} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
          <br/>
          <button className={'submit-button rounded-md mt-4'} onClick={checkUsernamePassword}>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
