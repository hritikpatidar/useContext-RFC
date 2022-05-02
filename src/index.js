import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home1 from '../src/useCallback/Home1'
//import UseReducer from './useReducer/UseReducer'
//import Home from './use Ref funtional component/Home';
//import App1 from './usecontext in Functional component/App1'
//import App2 from './usecontext in class component/App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App2 />
    <hr/>
    <App1 /> 
    <hr/>
    <Home />
    <UseReducer />*/}
    <Home1 />
  </React.StrictMode>
);
