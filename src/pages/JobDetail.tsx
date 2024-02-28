import React from 'react';
import '../App.css';

function JobDetail() {
  return (
    <div className={'body'}>
      <div className={'header-bar drop-shadow-lg px-8 py-2 flex justify-between'}>
        <div className={''}>
          <div className={'font-bold text-2xl leading-7 pt-2'}>FLOC</div>
        </div>
        <div className={'login-button font-normal text-lg leading-6 border rounded-full'}>
          <button className={'px-4 py-2'}>Log Out</button>
        </div>
      </div>

      <div className={'container mx-auto'}>
        <div className={'font-extrabold text-4xl py-6 mt-2'}>
          job details
        </div>

        <div>
          <div className={'job-detail-box'}>
            <div className={'p-4 grid grid-cols-2 gap-6 p-8'}>
              <img className={'job-detail-image col-span-1'} src={'https://drive.google.com/thumbnail?id=1Kfpic8DdKZynK_B9YAcwsv2u6RhtfXQB&sz=w1000'}  alt={'job img'} />
              <div className={'col-span-1'}>
                <div className={'font-semibold text-5xl'}>
                  {'4-month social media'}
                </div>
                <div className={'text-3xl font-normal pt-4'}>
                  {'x1 photographer\nx1 content writer\nx1 graphic designer'}
                </div>
              </div>
              </div>
            </div>
        </div>

        <div className={'pt-8'}>
          <div className={'back-button font-medium text-2xl border rounded-full'}>
            <button className={'px-4 py-2'}>back to job list</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default JobDetail;
