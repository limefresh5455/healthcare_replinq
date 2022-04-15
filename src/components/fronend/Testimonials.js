import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonails = () => {
    return (


    
<>

    

    <div className='container'>
        <div className='testimonialsec'>   
            <div className='row text-center'>
                <div className='testheading'>
                <h2>Testimonials</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                </div>
            </div>

            <div className='row'>

            <OwlCarousel
                className="owl-theme"
                items="3"
                autoplay
                smartSpeed={500}
                nav
                dots
                loop
                center
                margin={20}
                 
            >
            <div className='items'>
                    <div className='testimonailbox'>
                    <span className='quote'><img src="\images\quotes.svg" alt=""/></span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <div className='profilesec'>
                                <span className='profilepic'>
                                <img src="\images\profilePic.png" alt=""/>
                                </span>
                                <div className='profName'>
                                    <h5>Veronica Adam</h5>
                                    <span>Lorem Ipsum Hospital</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='items'>
                   <div className='testimonailbox'>                       
                        <span className='quote'><img src="\images\quotes.svg" alt=""/></span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <div className='profilesec'>
                            <span className='profilepic'>
                            <img src="\images\profilePic.png" alt=""/>
                            </span>
                            <div className='profName'>
                                <h5>Veronica Adam</h5>
                                <span>Lorem Ipsum Hospital</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='items'>
                    <div className='testimonailbox'>
                    <span className='quote'><img src="\images\quotes.svg" alt=""/></span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <div className='profilesec'>
                                <span className='profilepic'>
                                <img src="\images\profilePic.png" alt=""/>
                                </span>
                                <div className='profName'>
                                    <h5>Veronica Adam</h5>
                                    <span>Lorem Ipsum Hospital</span>
                                </div>
                            </div>
                    </div>
                </div>  
    </OwlCarousel>

               
              
             

            </div>
        </div>
    </div> 
</>
    

)
};


export default Testimonails;