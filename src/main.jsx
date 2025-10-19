import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './css/index.css'
import Home from './pages/Home';
import Register from './pages/Register';

const root = document.getElementById("root");

createRoot(root).render(

  <BrowserRouter>
    <Routes>

      <Route path="/register" element = {<Register/>}/>
      <Route path="/" element = {<Home/>}/>

    </Routes>
  </BrowserRouter>

)
