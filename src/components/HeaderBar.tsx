import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { clearJobItem, setIsJobSelected, setIsLogin, setIsShowLoginPopup } from '../state/job/JobSlice';
import { useNavigate } from 'react-router-dom';

function HeaderBar() {

  const isLogin = useSelector((state: RootState) => state.job.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    //show login popup
    dispatch(setIsShowLoginPopup(true));
  }

  const handleLogout = () => {
    //set Login state to 'FALSE'
    //clear Job item state
    dispatch(setIsLogin(false));
    dispatch(setIsJobSelected(false));
    dispatch(clearJobItem());
    navigate('/');
  }

  return (
      <div className={'header-bar drop-shadow-lg px-8 py-2 flex justify-between'}>
        <div className={''}>
          <div className={'font-bold text-2xl leading-7 pt-2'}>FLOC</div>
        </div>
        <div className={'login-button font-normal text-lg leading-6 border rounded-full'}>
          {
            isLogin ? (
              <button className={'px-4 py-2'} onClick={handleLogout}>Log Out</button>
            ):(
              <button className={'px-4 py-2'} onClick={handleLogin}>Log In</button>
            )
          }
        </div>
      </div>
  );
}

export default HeaderBar;
