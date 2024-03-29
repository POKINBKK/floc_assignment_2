import React from 'react';
import '../App.css';
import ManBlue from '../assets/Shiny_Happy_Standing_Blue.png';
import ManRed from '../assets/Shiny_Happy_Standing_Red.png';
import JobItems, { JobItem } from '../jobitems';
import Login from '../components/Login';
import HeaderBar from '../components/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { setIsJobSelected, setIsShowLoginPopup, setJobItem } from '../state/job/JobSlice';
import { useNavigate } from "react-router-dom";

function JobLists() {

  const isShowLoginPopup = useSelector((state: RootState) => state.job.isShowLoginPopup);
  const isLogin = useSelector((state: RootState) => state.job.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleJobClick = (item: JobItem) => {
    //if already login
    //set job item and navigate to detail page
    //else
    //set job item and show login popup
    if(isLogin){
      dispatch(setIsJobSelected(true));
      dispatch(setJobItem(item));
      navigate('/detail');
    } else {
      dispatch(setIsJobSelected(true));
      dispatch(setJobItem(item));
      dispatch(setIsShowLoginPopup(true));
    }
  }

  return (
    <div className={'body'}>
      <HeaderBar />

      <div className={'header-image xl:px-40 xl:pt-40 xl:pb-24 px-8 pt-12 pb-12'}>
        <div className={'flex'}>
          <div>
            <div className={'font-semibold md:text-6xl text-2xl'}>
              Find your flexible<br/>
              top talent
            </div>
            <div className={'font-normal md:text-base text-xs pt-2'}>
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

      <div className={'list-box container mx-auto px-8'}>
        <div className={'font-bold text-4xl py-6 mt-2 border-b'}>
          explore job
        </div>
        <div className={'grid grid-cols-12 gap-6 p-8'}>
          {JobItems.map((item) => {
            return (
              <div className={'col-span-12 md:col-span-6 xl:col-span-3'}>
                <div className={'item-box'} onClick={() => handleJobClick(item)}>
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

      {isShowLoginPopup && <Login />}
    </div>
  );
}

export default JobLists;
