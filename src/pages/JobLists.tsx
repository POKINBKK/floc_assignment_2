import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import ManBlue from '../assets/Shiny_Happy_Standing_Blue.png';
import ManRed from '../assets/Shiny_Happy_Standing_Red.png';

function JobLists() {
  return (
    <div className={'body'}>
      <div className={'header-bar drop-shadow-lg px-8 py-2 flex justify-between'}>
        <div className={''}>
          <div className={'font-bold text-2xl leading-7 pt-2'}>FLOC</div>
        </div>
        <div className={'login-button font-normal text-lg leading-6 border rounded-full'}>
          <button className={'px-4 py-2'}>Log In</button>
        </div>
      </div>
      <div className={'header-image px-40 pt-40 pb-24'}>
        <div className={'flex'}>
          <div>
            <div className={'font-semibold text-6xl'}>
              Find your flexible
            </div>
            <div className={'font-semibold text-6xl'}>
              top talent
            </div>
            <div className={'font-normal text-base'}>
              lorem ipsum dolor sit amet consectetur. Quis 
            </div>
            <div className={'font-normal text-base'}>
              integer parturient senectus varius id. 
            </div>
          </div>
          <div className={'flex'}>
            <div>
              <img src={ManBlue} style={{width: '346px'}} alt="Shiny Happy Man Blue" />
            </div>
            <div>
              <img src={ManRed} style={{width: '305px'}} alt="Shiny Happy Man Red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobLists;
