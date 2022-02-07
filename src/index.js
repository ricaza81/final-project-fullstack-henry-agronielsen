import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/appx/assets/css/app.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import CanvaLeft from './components/Front/CanvaLeft';

import CanvaRight from './components/Front/CanvaRight';

ReactDOM.render(
  <React.StrictMode>   
    <Header />
    <CanvaLeft />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
