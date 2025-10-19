import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/index.css'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthLayout from './components/AuthLayout';

const root = document.getElementById("root");

createRoot(root).render(

  <BrowserRouter>
    <Routes>

      <Route path="/register" element = {<Register/>}/>
      <Route path="/login" element = {<Login/>}/>

      <Route element={<AuthLayout/>}>
        <Route path="/" element = {<Home/>}/>
      </Route>

    </Routes>
  </BrowserRouter>

)
