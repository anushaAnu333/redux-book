import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Books from './Books';
import Editbook from './Editbook';
import Singlebook from './Singlebook';
import RequireAuth from '../Components/RequireAuth';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/books/:id" element={<Singlebook />}/>
        <Route path="/books/:id/edit" element={<RequireAuth><Editbook /> </RequireAuth>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
  )
}

export default Mainroutes;