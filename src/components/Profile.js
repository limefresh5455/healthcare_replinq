import React from 'react'
import AdminLeftMenu from './backend/AdminLeftMenu';
import { Link } from "react-router-dom";

const Profile = () => {
    return (
    
    <>
    

    <div className="offcanvas offcanvas-start" id="demo">
       <AdminLeftMenu />
      </div>
      
      <div className="rightpane">
                <div className="container">
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='schedule-boxleft profileleftbox'>
                          <div className='propicbox'>
                             <img src="\images\profilePic.png" width={'135'} alt='' />
                          </div>
                          <h3>Racheal Adams</h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                          <div className='profileboxfooter'>
                            <Link to='#'>Upload Picture</Link>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-8'>
                      <div className="schedule-boxleft prorightform">
                        <div className='prorightform hdr'>
                          <h3>Profile</h3>
                          <p>The information can be edited</p>
                        </div>
                        <div className='prorightform bdy'>
                        <form>
                          <div className="row">
                            <div className="col">
                              <input type="text" className="form-control" placeholder="First Name*" name="name" />
                              <small className='smalltext'>Please specify the first name</small>
                            </div>
                            <div className="col">
                              <input type="text" className="form-control" placeholder="Last Name*" name="last name" />
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col">
                              <input type="email" className="form-control" placeholder="Email*" name="email" />
                            </div>
                            <div className="col">
                              <input type="number" className="form-control" placeholder="Phone Number" name="phone number" />
                            </div>
                          </div>
                        </form>
                        </div>
                        <div className='prorightform ftr'>
                          <button className='btn btn-primary' type="button">Save Changes</button>
                        </div>

                      </div>

                      <div className="schedule-boxleft prorightform mt-5">
                        <div className='prorightform hdr'>
                          <h3>Change Password</h3>
                          <p>It's a good idea to use a strong password that you're not using elsewhere</p>
                        </div>
                        <div className='prorightform bdy'>
                        <form>
                          <div className="row justify-content-center gap-4">
                            <div className="col-6">
                              <input type="password" className="form-control" placeholder="Current Password" name="" />
                             
                            </div>
                            <div className="col-6">
                              <input type="password" className="form-control" placeholder="New Password" name="" />
                            </div>
                          
                         
                            <div className="col-6">
                              <input type="password" className="form-control" placeholder="Re-Type New" name="" />
                            </div>
                            <div className="col-6">
                              <Link to='#' className='a-g-link'>Forgot Password?</Link>
                            </div>
                         </div>
                        </form>
                        </div>
                        <div className='prorightform ftr'>
                          <button className='btn btn-primary' type="button">Update Password</button>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
      </div>
    
    </>
    

    )
  };
  
export default Profile;