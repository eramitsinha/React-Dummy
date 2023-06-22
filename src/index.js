import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from './demo';
import reportWebVitals from './reportWebVitals';
import User from './User';
import ClickEvent from './ClickEvent';
import ClickEventArrow from './ClickEventArrow';
import WithoutState from './WithoutState';
import StateFunctionalComp from './StateFunctionalComp';
import StateFunctionalComp2 from './StateFunctionalComp2';
import StateClassComp from './StateClassComp';
import StateClassComp2 from './StateClassComp2';
import GetInputData1 from './GetInputData1';
import GetInputData2 from './GetInputData2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
    <Demo />
    <User />  
     <ClickEvent />
    <ClickEventArrow />
    <WithoutState /> 
     <StateFunctionalComp /> 
     <StateFunctionalComp2 />
    <StateClassComp />
    <StateClassComp2 />
    <GetInputData1 />
    <GetInputData2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
