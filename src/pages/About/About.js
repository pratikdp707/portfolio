import React from 'react'
import './about.css'
import profile from '../../constants/profile.jpg'
export const About = () => {

    const skills1 = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js',  'Express', 'MYSQL', 'MongoDB', 'Oracle', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Java', 'C++', 'Automation Anywhere'];

    return (
        <div className='container min-vh-100 pt-5' id="about">
            <h1 className='text-center pt-5 heading'>About Me</h1>
            <div className="container text-start ps-3">
                <div className="row mt-3 mb-3">
                    <div className="col-lg-4 text-center mb-2 mt-2">
                        <img className="profile-img" src={profile} alt="profile-img" />
                    </div>  
                    <div className="col-lg-8 mb-4">
                        <p className='mb-0 p-name'>Hello, I'm Pratik Parate.</p>
                        <p className='mb-3'>I am Computer Engineer from Pune, Maharashtra, India. I am currently working with RBL Bank as a Manager - Technology and Solution (IT). </p>
                        <p>
                        Focused on building a diverse set of skills to find effective and creative solutions for all my projects.
                        <p>I design full-stack applications built on simplistic, stable and rapid technologies that offer creative solutions to common tedious problems. I specialize in web development.</p>
                        </p>
                        <p></p>
                    </div>

                </div>
                <div className="row text-start mt-1">
                    <h2>Skills</h2>
                    <div className='d-flex flex-wrap'>
                        {
                            skills1.map((skill, index) => {
                                return(
                                    <div className='skill-box' key={index}>
                                        {skill}
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
