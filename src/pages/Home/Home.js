import React from 'react'
import './home.css'
export const Home = () => {

    const resumeLink = "https://drive.google.com/file/d/1LKUkhFMxPOzm8E-IGLhLH_NmIjLk1C1q/view?usp=sharing";

    return (
        <div className="container min-vh-100 mt-4 pt-2 px-2 mb-0" id="home">
            <div className="row text-start">
                <div className="col-md-6 pt-5 mb-5">
                    <div className="home-text">
                        <h4 className='mb-2'><strong>Hello,</strong></h4>
                        <h1 className='mb-2'><strong>I'm Pratik Parate</strong></h1>
                        <h2 className='mb-4'><strong>Full Stack Developer</strong></h2>
                        <button className='btn btn-lg fs-5 btn-resume' onClick={() => {
                            window.open(resumeLink, "_blank")}}> Get Resume</button>
                </div>
            </div>
            <div className="col-md-6 ps-5 mt-5">
                <div className="home-contact ms-4">
                    <div className='d-flex flex-row mb-4'>
                        <i className="contact-img fa fa-envelope me-5"></i>
                        <p className='contact-content'>pratikparate707@gmail.com</p>
                    </div>
                    <div className='d-flex flex-row mb-4'>
                        <i class="contact-img fa fa-linkedin me-5"></i>
                        <p className='contact-content'><a href="https://linkedin.com/in/pratik-parate-70b008137/" target="_blank" rel="noreferrer" className='ps-1'>pratik-parate-70b008137</a></p>
                    </div>
                    <div className='d-flex flex-row mb-4'>
                        <i class="contact-img fa fa-phone-alt me-5"></i>
                        <p className='contact-content'>9130551453</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <i class="contact-img fab fa-github me-5"></i>
                        <p className='contact-content'><a href ="https://github.com/pratikdp707" target="_blank" rel="noreferrer">github.com/pratikdp707</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}
