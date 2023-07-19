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
import ShowHide from './ShowHide';
import Toggle from './Toggle';
import Condition from './Condition';
import Form from './Form';
import BasicFormValidation from './BasicFormValidation';
import UseEffect from './UseEffect';
import LifeCycleMethods from './LifeCycleMethods';
import GetDerivedStateFromProp from './GetDerivedStateFromProp';
import ShouldCompUpdate from './ShouldCompUpdate';
import ComponentDidUpdat from './ComponentDidUpdat';
import ComponentWillUnmount1 from './ComponentWillUnmount1';
import UseEffectHook1 from './UseEffectHook1';
import UseEffectHook2 from './useEffectHook2';
import Demo2 from './Demo2';
import UseStateObjects from './UseStateObjects';
import Event from './StateFunctionalComp1';
import StateFunctionalComp1 from './StateFunctionalComp1';
import Fragment from './Fragment1';
import Fragment2 from './Fragment2';
import Fragment1 from './Fragment1';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Bootstrap from './Bootstrap';
import DemoTest from './DemoTest';
import ContextAPI1 from './ContextAPI1';
import PureComponent1 from './PureComponent1';
import PureComponent2 from './PureComponent2';
import ControlledComp from './ControlledComp';
import UncontrolledCompJs from './UncontrolledCompJs';
import UnControlledCompRef from './UnControlledCompRef';
import UseMemo from './UseMemo';
import Ref from './Ref';
import UseRef from './UseRef';
import ForwardRef1 from './ForwardRef1';
import FetchApiGetFunctional from './FetchApiGetFunctional';
import FetchApiGetClass from './FetchApiGetClass';
import FetchApiPostFunctional from './FetchApiPostFunctional';
import FetchApiPostFunctional2 from './FetchApiPostFunctional2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <FetchApiGetFunctional />
    <br />
    <FetchApiGetClass />
    <br />
    <FetchApiPostFunctional />
    <br />
    <FetchApiPostFunctional2 />
    {/* 
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
    <ShowHide />
    <Toggle />
    <Condition />
    <Form />
    <BasicFormValidation />
    <UseEffect />
    <LifeCycleMethods />
    <GetDerivedStateFromProp />
    <ShouldCompUpdate />
    <ComponentDidUpdat />
    <ComponentWillUnmount1 />
    <UseEffectHook1 />
    <UseEffectHook2 />
    <Demo2 />
    <UseStateObjects /> 
    <StateFunctionalComp1 />
    <Fragment1 />
    <Fragment2 />
    <Bootstrap />
    <DemoTest />
    <ContextAPI1 />
    <PureComponent1 />
    <PureComponent2 />
    <ControlledComp />
    <UncontrolledCompJs />
    <UnControlledCompRef />
    <UseMemo />
    <Ref />
    <UseRef />
    <ForwardRef1 /> */}
    
   </React.StrictMode>
    


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
