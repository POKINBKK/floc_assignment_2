import React from 'react';
import '../App.css';
import ManBlue from '../assets/Shiny_Happy_Standing_Blue.png';
import ManRed from '../assets/Shiny_Happy_Standing_Red.png';
import JobItems from '../jobitems';

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
              Find your flexible<br/>
              top talent
            </div>
            <div className={'font-normal text-base pt-2'}>
              lorem ipsum dolor sit amet consectetur. Quis<br/>
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

      <div className={'list-box container mx-auto'}>
        <div className={'font-bold text-5xl py-6 mt-2 border-b'}>
          explore job
        </div>
        <div className={'grid grid-cols-12 gap-6 p-8'}>
          {JobItems.map((item) => {
            return (
              <div className={'col-span-12 md:col-span-6 xl:col-span-3'}>
                <div className={'item-box'}>
                  <div className={'p-4'}>
                    <img className={'item-image'} src={item.image}  alt={item.jobName} />
                    <div className={'font-semibold text-base leading-4 pt-2'}>
                      {item.jobName}
                    </div>
                    <div className={'text-xs font-normal pt-4'}>
                      {item.jobDetail}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default JobLists;
