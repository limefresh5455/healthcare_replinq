import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import './Backend.css';
import profileService from '../../services/profileService';

const Backend = () => {
    const [userData, setUserData] = useState([]);
    const getProfileData = () => {
      new profileService().getProfileData().then(res => {
          setUserData(res.data);
        }
      );
    }
    useEffect(() => {
      getProfileData();
      return () => {
        console.log("cleanup")
      }
    }, []);
    return (
    <>
    <div className="backendWrap">
      <Header userData={userData}/>
      <Outlet context={[userData]}/>                                     
    </div>
    </>
    )
  };
  
  export default Backend;
  