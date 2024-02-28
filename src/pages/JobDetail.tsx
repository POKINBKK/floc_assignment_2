import React from 'react';
import '../App.css';
import HeaderBar from '../components/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useNavigate } from 'react-router-dom';
import { clearJobItem, setIsJobSelected } from '../state/job/JobSlice';

function JobDetail() {

  const jobItem = useSelector((state: RootState) => state.job.jobItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    //clear job item state and back to home
    dispatch(setIsJobSelected(false));
    dispatch(clearJobItem());
    navigate('/');
  }

  return (
    <div className={'body'}>
      <HeaderBar/>

      <div className={'container mx-auto'}>
        <div className={'font-extrabold text-4xl py-6 mt-2'}>
          job details
        </div>

        <div>
          <div className={'job-detail-box'}>
            <div className={'p-4 grid grid-cols-2 gap-6 p-8'}>
              <img className={'job-detail-image col-span-1'} src={jobItem.image}  alt={'job img'} />
              <div className={'col-span-1'}>
                <div className={'font-semibold text-5xl'}>
                  {jobItem.jobName}
                </div>
                <div className={'text-3xl font-normal pt-4'}>
                  {jobItem.jobDetail}
                </div>
              </div>
              </div>
            </div>
        </div>

        <div className={'py-8'}>
          <div className={'back-button font-medium text-2xl border rounded-full'}>
            <button className={'px-4 py-2'} onClick={handleBack}>back to job list</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
