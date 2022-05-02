import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (

<>
    <div className="topHd">
      <div className="rightpane">
        <div className="row">
          <div className="col-5 col-lg-2">
              <button className="btn d-md-none mbutton" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
              <i className='fa fa-bars'></i>
              </button>
              <Link to="/"> <img src="\images\logo.png" width={'100'} alt=""/></Link>
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
                                    <a className="nav-link d-none d-lg-block pname" href="#">Racheal Adam</a>
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