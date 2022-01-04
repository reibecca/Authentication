import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
