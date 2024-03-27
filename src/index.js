import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/App.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import MyRouter from './Components/Route/MyRouter.jsx';
import axios from 'axios';
axios.defaults.baseURL = 'https://samportfolio.in/back/public/index.php/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}`:"";
  return config;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/front'}>
      <MyRouter/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
