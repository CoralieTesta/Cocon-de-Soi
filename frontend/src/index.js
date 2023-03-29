import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import { Prices } from './pages/Prices/Prices';
import { About } from './pages/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/apropos' element={<About/>}/>
          <Route path='/tarifs' element={<Prices/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
);
