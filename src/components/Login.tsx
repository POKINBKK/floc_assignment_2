import React, { useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearJobItem, setIsJobSelected, setIsLogin, setIsShowLoginPopup } from '../state/job/JobSlice';
import { RootState } from '../state/store';
import { useNavigate } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';
import ClickOutside from './ClickOutside';

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

  const handleClosePopup = () => {
    //close popup and clear job item selected
    dispatch(setIsShowLoginPopup(false));
    dispatch(setIsJobSelected(false));
    dispatch(clearJobItem());
  }

  return (
    <div className={'login-body'}>
      <ClickOutside onClick={handleClosePopup} className={'w-fit mx-auto'}>
      <div className={'login-box drop-shadow-lg'}>
        <div className={'text-4xl font-semibold mx-auto w-fit pt-16'}>Login</div>
        <div className={'px-12 pt-6'}>
          <div className={'input-box rounded-md'} >
            <input type='text' placeholder='Your email' onChange={(e) => setUsername(e.target.value)}/>
            <svg className='username' width="17" height="14" viewBox="0 0 17 14" fill="#ADB0CD" stroke="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5356 1.64094C16.5356 0.738425 15.7915 0 14.8821 0H1.65356C0.744104 0 0 0.738425 0 1.64094V11.4866C0 12.3891 0.744104 13.1276 1.65356 13.1276H14.8821C15.7915 13.1276 16.5356 12.3891 16.5356 11.4866V1.64094ZM14.8821 1.64094L8.26782 5.7433L1.65356 1.64094H14.8821ZM14.8821 11.4866H1.65356V3.28189L8.26782 7.38425L14.8821 3.28189V11.4866Z"/>
            </svg>
          </div>
          <div className={'input-box rounded-md mt-4'}>
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <svg className='password' width="19" height="17" viewBox="0 0 19 17" fill="none" stroke="#ADB0CD" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6516 8.9098L14.1081 10.2281L17.021 7.5915L15.5646 6.27319" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.45776 8.7503L17.0204 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.36942 15.5014C7.78258 15.5014 9.73883 13.7307 9.73883 11.5465C9.73883 9.36222 7.78258 7.59155 5.36942 7.59155C2.95625 7.59155 1 9.36222 1 11.5465C1 13.7307 2.95625 15.5014 5.36942 15.5014Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <button className={'submit-button rounded-md mt-4'} onClick={checkUsernamePassword}>Log In</button>
        </div>
      </div>
      </ClickOutside>
    </div>
  );
}

export default Login;
