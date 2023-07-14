import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import {ContactUs} from './components/Pages/ContactUs';
import { Login } from "./components/Pages/Login";
import Register from "./components/Register";
import Sidebar from "./components/Pages/Sidebar";
import Products from "./components/Pages/Products";

function App() {
  const [drawerPos, setDrawerPos] = useState(1);

  const handleDrawer = () => {
    if (drawerPos < 2) {
      setDrawerPos(drawerPos + 1);
    } else {
      setDrawerPos(0);
    }
  };
  return (
    <>
      <Router >
        <NavBar handleDrawer={handleDrawer} />
        <Sidebar drawerPos={drawerPos} />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login/>}/>
            {/* <Route path="/Home" element={<Home />}/> */}
            <Route path="/Register" element={<Register/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/sidebar" element={<Sidebar/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
          </Routes>
        </div>
        
      </Router>
  </>
  );
}

export default App;
