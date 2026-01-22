// // src/router/AppRoute.jsx - ត្រួតពិនិត្យ paths
// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import MainLayout from '../layout/MainLayout'  // ← ត្រូវតែត្រឹមត្រូវ
// import Home from '../page/Home'                // ← ត្រូវតែត្រឹមត្រូវ
// import About from '../page/About'              // ← ត្រូវតែត្រឹមត្រូវ

// function AppRoute() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//       </Route>
//     </Routes>
//   )
// }

// export default AppRoute
// src/router/AppRoute.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../page/Home';          // ← ប្រើ Home page នៅទីនេះ
import About from '../page/About';
import Services from '../page/Services';
import Contact from '../page/Contact';
import Info from '../page/info';
// import other pages...

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />  {/* ← Home page នៅទីនេះ */}
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="Contact" element={<Contact /> } />
        <Route path="Info" element={<Info /> } />
        
        {/* other routes... */}
      </Route>
      
    </Routes>
  );
}

export default AppRoute;