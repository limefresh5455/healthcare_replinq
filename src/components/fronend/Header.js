import React from "react";


const Header = () => {
    return (
    
    <>
    <nav className="navbar navbar-expand-sm">
            <div class="container">
              <a className="navbar-brand" href="javascript:void(0)"> <img src="\images\logo.jpg" width={'100'} alt=""/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#aboutus">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contactus">Contact Us</a>
                  </li>

                </ul>
              
              </div>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mylogin">
               Login
              </button>
                  <div className="modal loginM" id="mylogin">
                  <div className="modal-dialog">
                <div className="modal-content"> 
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                 <img src="\images\loginPopLeftImg.png" className='leftImg' alt=""/>
                            </div>
                            <div className='col-12 col-md-6'>
                            <button type="button" class="btn-close loginmdl" data-bs-dismiss="modal"></button>
                            
                                <div className='formWrap'>
                                    <span className='weback'>Welcome Back!</span>
                                    <h2>Login to your account</h2>
                                    <form>
                        <div className='row'>
                            <div className='col-12 mb-4'>
                            <input type='text' className='form-control' id='email' placeholder='Email' name='email' />
                               <span className="inpicrgt"><i className='fa fa-envelope'></i></span>                           
                            </div>
                            <div className='col-12 mb-4'>
                            <input type='password' className='form-control' placeholder='Password' name='pswd' />
                            <span className="inpicrgtpws"><i className='fa fa-lock'></i></span>
                            </div>
                            <div className='col mb-4'>
                            <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio"/> Remember Me
                            </label>
                            </div>
                            <div className='col mb-4'>
                                <a href='#' className='float-right'>Forget Password</a>
                            </div>
                            <div className='col-12'>
                                <input type='button' class='btn btn-primary' value='Login'></input>
                            </div>
                            <div className='col-12 mt-4 mb-4 text-center'>
                               Don't have an account <a href='#' className='text-underline'>Sign Up</a>
                            </div>
                        </div>
                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        
                </div>
                </div>
                  </div>

            </div>
      </nav>
            
      <div className="heroBanner">
        <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-5">
          <h1>Welcome to <img src='\images\herologo.png' alt=''/></h1>
                    <h2>Replinq solves scheduling for medical device representatives of all kinds. Provide your
                    physicians with the best possible support by automating your process entirely.</h2>
                   
                   
                    <button type="button" className="btn btn-primary float-start" data-bs-toggle="modal" data-bs-target="#ModalRegistration">
                      Register Now
                    </button>

          </div>
          <div className="col-sm-7">
            <img src='\images\heroImagetrance.png' className='float-end' width='439' alt=''/>
          </div>
        </div>
        </div>
        <div className="modal loginM" id="ModalRegistration">
        <div className="modal-dialog">
                <div className="modal-content"> 
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                 <img src="\images\registrationLeftImg.png" className='leftImg' alt=""/>
                            </div>
                            <div className='col-12 col-md-6'>
                            <button type="button" class="btn-close loginmdl" data-bs-dismiss="modal"></button>
                                <div className='formWrap frmregistr'>
                                    <h2>Welcome to replinq</h2>
                                    <span className='weback'>All your schedules in one place!</span>                                    
                                    <form>
                        <div className='row'>
                            <div className='col-12 mb-4'>
                            <input type='text' className='form-control' id='email' placeholder='Email' name='email' />
                               <span className="inpicrgt"><i className='fa fa-envelope'></i></span>                           
                            </div>
                            <div className='col-12 mb-4'>
                            <input type='password' className='form-control' placeholder='Password' name='pswd' />
                            <span className="inpicrgtpws"><i className='fa fa-lock'></i></span>
                            </div>
                            <div className='col-12 mb-4'>
                            <input type='password' className='form-control' placeholder='Verify Password' name='pswd' />
                            <span className="inpicrgteye"><i className='fa fa-eye'></i></span>
                            </div>
                            <div className='col-12 mb-4'>
                            <input type='text' class='form-control' placeholder='Company' name='company' />
                            <span className="inpicrgtcomp"><i className='fa fa-building'></i></span>
                            </div>
                            <div className='col-12 mb-2 text-start'>
                            <span className='weback'>Vendor Credentialing Badge Information</span>
                            </div>
                            <div className='col-12 mb-4'>
                            <input type='text' className='form-control' placeholder='Intellicentric badge ID' name='company' />
                           
                            </div>
                           
                            <div className='col mb-4 text-start'>
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name=""/> Not a Subscriber
                            </label>
                            </div>

                            <div class='col-12 mb-4'>
                            <input type='text' class='form-control' placeholder='Symplr badge ID' name='company' />
                            
                            </div>
                           
                            <div className='col mb-4 text-start'>
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name=""/> Not a Subscriber
                            </label>
                            </div>

                            
                            <div className='col-12'>
                                <input type='button' class='btn btn-primary' value='Sign Up'></input>
                            </div>
                            <div className='col-12 mt-2 mb-2 text-center'>
                               Already have an account <a href='#' className='text-underline'>Login</a>
                            </div>
                        </div>
                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        
                </div>
                </div>

          </div> 
                     
      </div>
      <div className="herobtmstrip" style={{ backgroundImage: "url(/images/herobtmstrips.png)"}} ></div>

      
       
    
    </>
    

    )
  };
  
  export default Header;
  