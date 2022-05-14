import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import authService from '../../services/authService';
import toaster from '../../helpers/toaster';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [not_a_subs_one, setNot_a_subs_one] = useState(false);
  const [not_a_subs_two, setNot_a_subs_two] = useState(false);
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();

  const handleChange = () => {
    setNot_a_subs_one(!not_a_subs_one);
  }

  const handleChangesec = () => {
    setNot_a_subs_two(!not_a_subs_two);
  }

  async function onSignUp(data, e) {
    setIsLoading(!isLoading);
    const body = {
      "email": data.email,
      "password": data.password,
      "company": data.company,
      "symplr_badge_ID": data.symplr_badge_ID,
      "intelli_badge_ID": data.intelli_badge_ID,
      "not_a_subs_one": not_a_subs_one,
      "not_a_subs_two": not_a_subs_two,
    }
    new authService().register(body).then(data => {
        if (data.success === true) {
          setIsLoading(isLoading);
          new toaster().successMessage(data.message);
          e.target.reset();
        } else if (data.success === false) {
          setIsLoading(false);
          if (data.message.email) {
            new toaster().errorMessage(data.message.email[0]);
          }
        }
      }
    );
  }

  async function onLogin(data, e) {
    setIsLoading(!isLoading);
    new authService().login(data).then(data => {
        if (data.success === true) {
          setIsLoading(isLoading);
          window.location.href = "/calendar";
          new toaster().successMessage(data.message);
          localStorage.setItem('access_token', data.access_token);
          e.target.reset();
        } else {
          setIsLoading(false);
          if (data.message.message) {
            new toaster().errorMessage(data.message.message[0]);
          }
        }
      }
    );
  }



  return (

    <>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="javascript:void(0)"> <img src="\images\logo.jpg" width={'100'} alt="" /></a>
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
                      <img src="\images\loginPopLeftImg.png" className='leftImg' alt="" />
                    </div>
                    <div className='col-12 col-md-6'>
                      <button type="button" className="btn-close loginmdl" data-bs-dismiss="modal"></button>

                      <div className='formWrap'>
                        <span className='weback'>Welcome Back!</span>
                        <h2>Login to your account</h2>
                        <form onSubmit={handleSubmit2(onLogin)}>
                          <div className='row'>
                            <div className='col-12 mb-4'>
                              <input type='text' className='form-control' {...register2("email", {
                                required: "Email is required"
                              })} id='email' placeholder='Email' name='email' />
                              <span className="inpicrgt"><i className='fa fa-envelope'></i></span>
                              {errors2.email ? (
                                <>
                                  {errors2.email.type === "required" && (
                                    <p className="errorMessage">
                                      {errors2.email.message}
                                    </p>
                                  )}
                                </>
                              ) : null}
                            </div>
                            <div className='col-12 mb-4'>
                              <input type='password' className='form-control' {...register2("password", {
                                required: "Password is required"
                              })} placeholder='Password' name='password' />
                              <span className="inpicrgtpws"><i className='fa fa-lock'></i></span>
                              {errors2.password ? (
                                <>
                                  {errors2.password.type === "required" && (
                                    <p className="errorMessage">
                                      {errors2.password.message}
                                    </p>
                                  )}
                                </>
                              ) : null}
                            </div>
                            <div className='col mb-4'>
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optradio" /> Remember Me
                              </label>
                            </div>
                            <div className='col mb-4'>
                              <a href='#' className='float-right'>Forget Password</a>
                            </div>
                            <div className='col-12'>
                              <input type='submit' disabled={isLoading} className='btn btn-primary' value='Login'></input>
                            </div>
                            <div className='col-12 mt-4 mb-4 text-center'>
                              Don't have an account <a data-bs-toggle="modal" data-bs-target="#ModalRegistration" href='#' className='text-underline'>Sign Up</a>
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
              <h1>Welcome to <img src='\images\herologo.png' alt='' /></h1>
              <h2>Replinq solves scheduling for medical device representatives of all kinds. Provide your
                physicians with the best possible support by automating your process entirely.</h2>
              <button type="button" className="btn btn-primary float-start" data-bs-toggle="modal" data-bs-target="#ModalRegistration">
                Register Now
              </button>
            </div>
            <div className="col-sm-7">
              <img src='\images\heroImagetrance.png' className='float-end' width='439' alt='' />
            </div>
          </div>
        </div>
        <div className="modal loginM" id="ModalRegistration">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <img src="\images\registrationLeftImg.png" className='leftImg' alt="" />
                  </div>
                  <div className='col-12 col-md-6'>
                    <button type="button" className="btn-close loginmdl" data-bs-dismiss="modal"></button>
                    <div className='formWrap frmregistr'>
                      <h2>Welcome to replinq</h2>
                      <span className='weback'>All your schedules in one place!</span>
                      <form onSubmit={handleSubmit(onSignUp)}>
                        <div className='row'>
                          <div className='col-12 mb-4'>
                            <input type='text' className='form-control' id='email' {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Email is invalid"
                              }
                            })} placeholder='Email' name='email' />
                            <span className="inpicrgt"><i className='fa fa-envelope'></i></span>
                            {errors.email ? (
                              <>
                                {errors.email.type === "required" && (
                                  <p className="errorMessage">
                                    {errors.email.message}
                                  </p>
                                )}
                                {errors.email.type === "pattern" && (
                                  <p className="errorMessage">
                                    {errors.email.message}
                                  </p>
                                )}
                              </>
                            ) : null}
                          </div>
                          <div className='col-12 mb-4'>
                            <input type='password' className='form-control' {...register("password", {
                              required: "Password is required",
                              minLength: { value: 8, message: "At least 8 character" }
                            })} placeholder='Password' name='password' />
                            <span className="inpicrgtpws"><i className='fa fa-lock'></i></span>
                            {errors.password ? (
                              <>
                                {errors.password.type === "required" && (
                                  <p className="errorMessage">
                                    {errors.password.message}
                                  </p>
                                )}
                                {errors.password.type === "minLength" && (
                                  <p className="errorMessage">
                                    {errors.password.message}
                                  </p>
                                )}
                              </>
                            ) : null}
                          </div>
                          <div className='col-12 mb-4'>
                            <input type='password' className='form-control' {...register("c_pswd", {
                              required: "Please confirm password!",
                              validate: {
                                matchesPreviousPassword: (value) => {
                                  const { password } = getValues();
                                  return password === value || "Passwords should match!";
                                }
                              }
                            })} placeholder='Verify Password' name='c_pswd' />
                            <span className="inpicrgteye"><i className='fa fa-eye'></i></span>
                            {errors.c_pswd && (
                              <p className="errorMessage">
                                {errors.c_pswd.message}
                              </p>
                            )}
                          </div>
                          <div className='col-12 mb-4'>
                            <input type='text' className='form-control' placeholder='Company' {...register("company", {
                              required: "Company is required",
                              maxLength: { value: 100, message: "Max 100 character" }
                            })} name='company' />
                            <span className="inpicrgtcomp"><i className='fa fa-building'></i></span>
                            {errors.company ? (
                              <>
                                {errors.company.type === "required" && (
                                  <p className="errorMessage">
                                    {errors.company.message}
                                  </p>
                                )}
                                {errors.company.type === "maxLength" && (
                                  <p className="errorMessage">
                                    {errors.company.message}
                                  </p>
                                )}
                              </>
                            ) : null}
                          </div>
                          <div className='col-12 mb-2 text-start'>
                            <span className='weback'>Vendor Credentialing Badge Information</span>
                          </div>
                          <div className='col-12 mb-4'>
                            <input type='text' className='form-control' placeholder='Intellicentric badge ID' {...register("intelli_badge_ID", {
                              required: "Intellicentric badge ID is required",
                              maxLength: { value: 100, message: "Max 100 character" }
                            })} name='intelli_badge_ID' />
                            {errors.intelli_badge_ID ? (
                              <>
                                {errors.intelli_badge_ID.type === "required" && (
                                  <p className="errorMessage">
                                    {errors.intelli_badge_ID.message}
                                  </p>
                                )}
                                {errors.intelli_badge_ID.type === "maxLength" && (
                                  <p className="errorMessage">
                                    {errors.intelli_badge_ID.message}
                                  </p>
                                )}
                              </>
                            ) : null}
                          </div>
                          <div className='col mb-4 text-start'>
                            <label className="form-check-label">
                              <input type="checkbox" onChange={(e) => setNot_a_subs_one(handleChange)} className="form-check-input" /> Not a Subscriber
                            </label>
                          </div>
                          <div className='col-12 mb-4'>
                            <input type='text' className='form-control' placeholder='Symplr badge ID' {...register("symplr_badge_ID", {
                              required: "Symplr badge ID is required",
                              maxLength: { value: 100, message: "Max 100 character" }
                            })} name='symplr_badge_ID' />
                            {errors.symplr_badge_ID ? (
                              <>
                                {errors.symplr_badge_ID.type === "required" && (
                                  <p className="errorMessage">
                                    {errors.symplr_badge_ID.message}
                                  </p>
                                )}
                                {errors.symplr_badge_ID.type === "maxLength" && (
                                  <p className="errorMessage">
                                    {errors.symplr_badge_ID.message}
                                  </p>
                                )}
                              </>
                            ) : null}
                          </div>
                          <div className='col mb-4 text-start'>
                            <label className="form-check-label">
                              <input type="checkbox" onChange={(e) => setNot_a_subs_two(handleChangesec)} className="form-check-input" /> Not a Subscriber
                            </label>
                          </div>
                          <div className='col-12'>
                            <input type='submit' disabled={isLoading} className='btn btn-primary' value='Sign Up' />
                          </div>
                          <div className='col-12 mt-2 mb-2 text-center'>
                            Already have an account <a href='#' data-bs-toggle="modal" data-bs-target="#mylogin" className='text-underline'>Login</a>
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
      <div className="herobtmstrip" style={{ backgroundImage: "url(/images/herobtmstrips.png)" }} ></div>

    </>


  )
};

export default Header;
