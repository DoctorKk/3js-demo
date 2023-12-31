import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MMD from './mmd/MMD'
import Viking from './Viking/Viking'
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p className='btns'>
      <button className='btn' onClick={() => window.location='/mmd'}>mmd</button>
      <button className='btn' onClick={() => window.location='/viking'}>viking</button>
      <button className='btn' onClick={() => window.location='/skull'}>skull</button>
      <button className='btn' onClick={() => window.location='/people'}>people</button>
    </p>
    <App />
    {/* <Viking /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
