import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './Frontend.css';


const Frontend = () => {
    return (
    
    <>
    <div className="fronpage"> 
            <Header />
                <Outlet />
            <Footer />       
    </div>
    </>    

    )
  };
  
  export default Frontend;
  