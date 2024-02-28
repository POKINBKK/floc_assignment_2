import React, { useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin, setIsShowLoginPopup } from '../state/job/JobSlice';
import { RootState } from '../state/store';
import { useNavigate } from 'react-router-dom';

function Login() {

  const dispatch = useDispatch();
  const isJobSelected = useSelector((state: RootState) => state.job.isJobSelected);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkUsernamePassword = () => {
    if(username === 'floc' && password === 'Thi$isTest1ng.'){
      //Close pop up
      //Set login state to 'TRUE'
      //Navigate to detail page if user click on Job Box and Login
      dispatch(setIsShowLoginPopup(false));
      dispatch(setIsLogin(true));
      if(isJobSelected){
        navigate('/detail');
      }
    }
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
