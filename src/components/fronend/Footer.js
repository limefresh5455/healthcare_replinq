import React from "react";

const Footer = () => {
    return (
    
    <>
    <div id="contactus" className="herobtmstrip" style={{ backgroundImage: "url(/images/herobtmstrips-btm.png)"}} ></div>
    <div className='footersec'>
        <footer>
            <div className='container'>
                <div className='row justify-content-center'>
                 <div className='col-md-6 text-center'>
                    <h2>Contact Us</h2>
                        <h6>We would love to hear from you. Provide your information below and reach out with any questions</h6>
                  </div>
                    <div className='col-md-7'>
                       <form>
                        <div className='row'>
                            <div className='col mb-3'>
                            <input type='text' className='form-control' id='email' placeholder='Full Name*' name='email' />
                            </div>
                            <div className='col mb-3'>
                            <input type='text' className='form-control' placeholder='Email*' name='pswd' />
                            </div>
                            <div className='col-12 mb-4'>
                            <textarea className='form-control' rows='5' placeholder='Message' id='Message'></textarea>
                            </div>
                            <div className='col-12 text-center'>
                                <input type='button' className='btn btn-primary' value='Submit'></input>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    
    </div> 
    </>
    

    )
  };
  
  export default Footer;
  