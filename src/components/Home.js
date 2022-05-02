import React from 'react'
// import Testimonails from './fronend/Testimonials';
import { Link } from "react-router-dom";
const Home = () => {
    return (
    
    <>
   <section className='midwrap' id='aboutus'>
        <div className='container w-80'>
           <div className='row align-items-end'>
            <div className='col-md-6'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='leftbox'>
                            <div className='l-box1'>
                            <img src="\images\leftImg.jpg" alt=""/>
                            <h3>Dashboard</h3>
                            <p>Every Surgical Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                            <div className='l-box1'>
                            <img src="\images\leftImg.jpg" alt=""/>
                            <h3>Live Calender</h3>
                            <p>Every Surgical Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                    <div className='rightbox'>
                        <div className='r-box1'>
                        <img src="\images\leftImg.jpg" alt=""/>
                        <h3>Physician Search</h3>
                            <p>Every Surgical Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        <div className='r-box1'>
                        <img src="\images\leftImg.jpg" alt=""/>
                        <h3>Notifications</h3>
                            <p>Every Surgical Lorem Ipsum is simply dummy text of the printing</p>
                            <img src="\images\dotstrip.png" className="aboutstrip" alt=""/>
                        </div>
                    </div>
                 
                    </div>
                </div>
            </div>
                <div className='col-md-6'>
                   <div className='aboutright'>
                        <h2>About Us</h2>
                        <p>Every Surgical Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <ul className="list-group aboulist">
                        
                            <li>Cloud SoftwareEvery Surgical Lorem Ipsum is simply dummy text of the printing</li>
                            <li>Automated Every Surgical Lorem Ipsum is simply dummy</li>
                            <li>Our Problem Every Surgical Lorem Ipsum is simply dummy text of the printing Every Surgical Lorem Ipsum is simply dummy text of the printing</li>
                        </ul>
                        <Link to="#" className="btn btn-primary">Let's Get Started</Link>
                    </div>
                </div>  
              
            </div>
        </div>

        {/* <Testimonails /> */}
           
    </section>
    </>
    

    )
  };
  
  export default Home;
  