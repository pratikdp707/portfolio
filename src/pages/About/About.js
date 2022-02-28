import React from 'react'
import './about.css'
import profile from '../../constants/profile.jpg'
export const About = () => {

    const skills1 = ['HTML', 'CSS', 'JavaScript', 'React'];
    const skills2 = ['Node.js', 'MYSQL', 'MongoDB', 'Oracle'];
    const skills3 = ['Bootstrap', 'Express', 'Java', 'C++'];

    return (
        <div className='bg-light container min-vh-100' id="about">
            <h1 className='text-center pt-5 heading'>About Me</h1>
            <div className="container text-start ps-3">
                <div className="row mt-3 mb-3">
                    <div className="col-lg-8 mt-4 mb-4">
                        <p className='mb-0'>Hello, I'm Pratik Parate.</p>
                        <p className='mb-3'>I am Computer Engineer from Pune, Maharashtra, India. I am currently working with RBL Bank as a Manager - Technology and Solution (IT). </p>
                        <p>
                            I love spending time on fixing little details and optimizing web apps. I also like to work in team, as you'll learn faster and much more. As the saying goes: 'Two heads are better than one'.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center mb-2">
                        <img className="profile-img" src={profile} alt="profile-img" />
                    </div>
                </div>
                <div className="row text-start mt-1">
                    <h2>Skills</h2>
                    <div className="col-md-4 mt-4">
                        <ul>
                            {skills1.map((skill) => {
                                return (
                                    <li><p>{skill}</p></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-md-4 mt-4">
                        <ul>
                            {skills2.map((skill) => {
                                return (
                                    <li><p>{skill}</p></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-md-4 mt-4">
                        <ul>
                            {skills3.map((skill) => {
                                return (
                                    <li><p>{skill}</p></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
