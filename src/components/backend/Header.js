import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [name, setName] = useState("");
  const current_token = localStorage.getItem('access_token');
  const callAPI = () => {
    let result = fetch("http://127.0.0.1:8000/api/getData", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Contect-Type': 'application/json',
        'Authorization': 'Bearer '+ current_token,
      },
    }).then((result) => {
      result.json().then((res) => {
        setName(res.data.name);
      })
    })
  }

  useEffect(() => {
    callAPI()
  }, []);

  return (
    <>
      <div className="topHd">
        <div className="rightpane">
          <div className="row">
            <div className="col-5 col-lg-2">
              <button className="btn d-md-none mbutton" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <i className='fa fa-bars'></i>
              </button>
              <Link to="/"> <img src="\images\logo.png" width={'100'} alt="" /></Link>
            </div>
            <div className='col-7 col-lg-10 text-end'>
              <div className="ms-auto">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <div className="input-group">
                      <input type="text" className="form-control searchbx" placeholder="Search" />
                      <div className="input-group-append">
                        <button className="btn-search" type="submit"><i className="fa fa-search"></i></button>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item d-flex">
                    <a className="nav-link d-none d-lg-block pname" href="#">{(name) ? name : ''}</a>
                    <span className="prfdv"><img src="\images\profilePic.png" width={'110'} alt='' /></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
};

export default Header;