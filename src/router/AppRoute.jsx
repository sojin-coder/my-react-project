import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../page/Home';
import About from '../page/About';
import Services from '../page/Services';
import Contact from '../page/Contact';
import Info from '../page/Info';
import Detail from '../page/Detail';
import NotFount from '../page/notFount';

function AppRoute() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="info" element={<Info />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
       {/* <Route path='*' element={<h1> Not fount</h1>} /> */}
       <Route path='*' element={<NotFount />} />

    </Routes>
   
    
  
    </>
    
  
  );
}

export default AppRoute;
