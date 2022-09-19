import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminLeftMenu from './backend/AdminLeftMenu';
import { ToastContainer } from 'react-toastify';
import profileService from '../services/profileService';
import toaster from '../helpers/toaster';
import Configuration from '../config/config';
import { Link } from "react-router-dom";

const Profile = () => {
  const config = new Configuration();
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
    getValues: getValues2
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [images, setImages] = useState("");
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [cnfirm_psd, setCnPassword] = useState("");
  const [sendImage, setSendImage] = useState("");
  const hiddenFileInput = React.useRef();
  const getProfileData = () => {
    new profileService().getProfileData().then(res => {
        setName(res.data.name);
        setEmail(res.data.email);
        setFirstname(res.data.first_name);
        setLastName(res.data.last_name);
        setPhoneNumber(res.data.phone_no);
        setImages(res.data.images);
        setId(res.data.id);
        localStorage.setItem('user_name', res.data.name);
      }
    );
  }

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const bodyFormData = new FormData();
    bodyFormData.append('images', hiddenFileInput.current.files[0]);
    new profileService().updateImage(bodyFormData, id).then(data => {
        if (data.success === true) {
          setImages(data.image);
          localStorage.setItem('user_image', data.image);
          new toaster().successMessage(data.message);
        } else if (data.success === false) {
          if (data.message.message) {
            new toaster().errorMessage(data.message.message);
          }
        }
      }
    );
  };

  useEffect(() => {
    getProfileData()
  }, [id]);

  async function updateProfile(data, e) {
    setIsLoading(!isLoading);
    new profileService().updateProfile(data, id).then(data => {
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
  };
 
  async function changepassword(data, e) {
    new profileService().changePassword(data).then(data => {
        if (data.success === true) {
          e.target.reset();
          new toaster().successMessage(data.message);
        } else if (data.success === false) {
          if (data.message) {
            new toaster().errorMessage(data.message);
          }
        }
      }
    );   
  };

  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <div className="offcanvas offcanvas-start" id="demo">
        <AdminLeftMenu />
      </div>
      <div className="rightpane">
        <div className="container">
          <div className='row'>
            <div className='col-md-4'>
              <div className='schedule-boxleft profileleftbox'>
                <div className='propicbox'>
                  {/* <p>{images}</p> */}
                  {/* <img src="\images\profilePic.png" width={'135'} alt='' /> */}
                  <img src={(images) ? config.IMG_URL + '' + images : "/images/profile.png"} width={'135'} alt='' />
                </div>
                <h3>{(name) ? name : ''}</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className='profileboxfooter'>
                  <Link to='#' onClick={handleClick}>Upload Picture</Link>
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{display: 'none'}}
                  />
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
                  <form  onSubmit={handleSubmit(updateProfile)}>
                    <div class="row">
                      <div class="col">
                        <input type="text" class="form-control" 
                          {...register("first_name", {
                            required: "First Name is required"
                          })}
                          placeholder="First Name*"
                          name="first_name" 
                          id="first_name"
                          defaultValue={firstname}
                         />
                         {errors.first_name ? (
                            <>
                              {errors.first_name.type === "required" && (
                                <p className="errorMessage">
                                  {errors.first_name.message}
                                </p>
                              )}
                            </>
                          ) : null}      
                        {/* <small className='smalltext'>Please specify the first name</small> */}
                      </div>
                      <div class="col">
                        <input type="text" class="form-control"
                          {...register("last_name", {
                            required: "Last Name is required"
                          })}
                          placeholder="Last Name*"
                          name="last_name" 
                          id="last_name" 
                          defaultValue={lastname}
                          />
                          {errors.last_name ? (
                            <>
                              {errors.last_name.type === "required" && (
                                <p className="errorMessage">
                                  {errors.last_name.message}
                                </p>
                              )}
                            </>
                          ) : null}
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col">
                        <input type="email" class="form-control"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Email is invalid"
                            }
                          })}
                          placeholder="Email*"
                          name="email"
                          defaultValue={email}
                          />
                          <span className="inpicrgt"><i className='fa fa-envelope'></i></span>
                          {errors.email ? (
                            <>
                              {errors.email.type === "required" && (
                                <p className="errorMessage">
                                  {errors.email.message}
                                </p>
                              )}
                            </>
                          ) : null} 
                      </div>
                      <div class="col">
                        <input type="number" class="form-control" 
                          placeholder="Phone Number"
                          name="phone_no"
                          defaultValue={phone}
                          {...register("phone_no", {
                            required: "Phone is required"
                          })} />
                        {errors.phone_no ? (
                          <>
                            {errors.phone_no.type === "required" && (
                              <p className="errorMessage">
                                {errors.phone_no.message}
                              </p>
                            )}
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div className='prorightform ftr  mt-4'>
                      <input type='submit' disabled={isLoading} className='btn btn-primary' value='Save Changes'></input>
                    </div> 
                  </form>
                </div>
              </div>
              <div className="schedule-boxleft prorightform mt-5">
                <div className='prorightform hdr'>
                  <h3>Change Password</h3>
                  <p>It's a good idea to use a strong password that you're not using elsewhere</p>
                </div>
                <div className='prorightform bdy'>
                  <form onSubmit={handleSubmit2(changepassword)} >
                    <div class="row justify-content-center gap-4">
                      <div class="col-6">
                           <div class="position-relative">
                              <input type="password"
                          class="form-control"
                           {...register2("old_password", {
                            required: "old_password is required"
                          })} 
                          placeholder="Current Password" name='old_password'
                          />
                          <span className="inpicrgtpws old-pass"><i className='fa fa-lock'></i></span>
                           </div>
                          {errors2.old_password ? (
                            <>
                              {errors2.old_password.type === "required" && (
                                <p className="errorMessage">
                                  {errors2.old_password.message}
                                </p>
                              )}
                            </>
                          ) : null}
                      </div>
                      <div class="col-6">
                        <input type="password"
                          class="form-control"
                          placeholder="New Password"
                          name="password"
                          {...register2("password", {
                            required: "New password is required"
                          })}
                          autocomplete="off"
                           />
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
                      <div class="col-6">
                        <input type="password"
                         class="form-control"
                         placeholder="Re-Type New"
                         name="confirm_password" 
                          {...register2("confirm_password", {
                            required: "Please confirm password!",
                            validate: {
                              matchesPreviousPassword: (value) => {
                                const { password } = getValues2();
                                return password === value || "Passwords should match!";
                              }
                            }
                          })}
                         autocomplete="off"
                         />
                         {errors2.confirm_password && (
                          <p className="errorMessage">
                            {errors2.confirm_password.message}
                          </p>
                         )}
                      </div>
                      <div className='prorightform ftr'>
                        <button className='btn btn-primary' type="submit">Update Password</button>
                      </div>
                    </div>
                  </form>
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