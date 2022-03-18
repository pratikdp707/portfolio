import React from 'react'
import './home.css'
export const Home = () => {

    const resumeLink = "https://drive.google.com/file/d/1LKUkhFMxPOzm8E-IGLhLH_NmIjLk1C1q/view?usp=sharing";

    return (
        <>
            <div className='container min-vh-100 mt-5 pt-5' id="home">
                <div className="text-center mt-5">
                    <div className="home-text mt-5 pt-5">
                        <h2 className='mb-0'><strong>Hello, I'm</strong></h2>
                        <p className='mb-0 name'><strong>Pratik Parate</strong></p>
                        <h1 className='mb-5'><strong>Full Stack Developer</strong></h1>

                    </div>
                    <div className='my-5 d-flex justify-content-center'>
                        <a href="https://github.com/pratikdp707" target="_blank" rel="noreferrer"><i className="mx-2 fab fa-github github-icon"></i></a>
                        <a href="mailto:pratikparate707@gmail.com" target="_blank" rel="noreferrer"><i className="mx-2 fab fa-google google-icon"></i></a>
                        <a href="https://linkedin.com/in/pratik-parate-70b008137/" target="_blank" rel="noreferrer"><i className="mx-2 fa fa-linkedin linkedin-icon"></i></a>
                    </div>
                    <button className='btn btn-lg fs-5 btn-resume' onClick={() => {
                        window.open(resumeLink, "_blank")
                    }}> Get Resume</button>
                </div>
            </div>
        </>
    )
}
