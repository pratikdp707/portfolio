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
                    <div className="col-lg-4 text-center mb-2">
                        <img className="profile-img" src={profile} alt="profile-img" />
                    </div>  
                    <div className="col-lg-8 mt-2 mb-4">
                        <p className='mb-0 p-name'>Hello, I'm Pratik Parate.</p>
                        <p className='mb-3'>I am Computer Engineer from Pune, Maharashtra, India. I am currently working with RBL Bank as a Manager - Technology and Solution (IT). </p>
                        <p>
                            I love spending time on fixing little details and optimizing web apps. I also like to work in team, as you'll learn faster and much more. As the saying goes: 'Two heads are better than one'.
                        </p>
                    </div>

                </div>
                <div className="row text-start mt-1">
                    <h2>Skills</h2>
                    <div className='d-flex flex-wrap'>
                        {
                            skills1.map((skill) => {
                                return(
                                    <div className='skill-box'>
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
