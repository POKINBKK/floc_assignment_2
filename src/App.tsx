import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobLists from './pages/JobLists';
import JobDetail from './pages/JobDetail';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobLists />} />
          <Route path="/detail" element={<JobDetail />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
