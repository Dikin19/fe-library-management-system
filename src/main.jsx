import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './css/index.css'
import Home from './pages/Home';

const root = document.getElementById("root");

createRoot(root).render(

  <BrowserRouter>
    <Routes>

      <Route path="/" element = {<Home/>}/>

    </Routes>
  </BrowserRouter>

)
