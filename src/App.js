import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomerRouters from "./routers/CustomerRouters.jsx";
import './App.css';
import List from "./customer/pages/list/List.jsx";
import Header from "./customer/header/Header.jsx";
import SearchItem from "./customer/pages/list/SearchItem.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/*' element={<CustomerRouters />} ></Route> 
        <Route path ='/List' element={<List />} ></Route> 
        <Route path ='/Header' element={<Header />} ></Route> 
        <Route path ='/SearchItem' element={<SearchItem />} ></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;