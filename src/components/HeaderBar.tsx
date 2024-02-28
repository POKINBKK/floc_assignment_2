import React from 'react';
import '../App.css';

function HeaderBar() {
  return (
      <div className={'header-bar drop-shadow-lg px-8 py-2 flex justify-between'}>
        <div className={''}>
          <div className={'font-bold text-2xl leading-7 pt-2'}>FLOC</div>
        </div>
        <div className={'login-button font-normal text-lg leading-6 border rounded-full'}>
          <button className={'px-4 py-2'}>Log In</button>
        </div>
      </div>
  );
}

export default HeaderBar;
