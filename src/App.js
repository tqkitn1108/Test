import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerRouters from "./routers/CustomerRouters.jsx";
import Home from "./hotel-dashboard/pages/home/Home.jsx";
import List from "./hotel-dashboard/pages/list/List.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/*' element={<CustomerRouters />} ></Route> 
        <Route path ='/home' element={<Home />} ></Route> 
        <Route path ='/list' element={<List />} ></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;