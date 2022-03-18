import React from 'react'
import './experience.css'
export const Experience = () => {

    const experience = [
        {
            "logo": "https://drws17a9qx558.cloudfront.net/website/images/RBL_logo_262.png",
            "name": "RBL Bank",
            "designation": "Manager - Technology & Solutions",
            "place": "Mumbai, Maharashtra, India.",
            "duration": "Full Time - 1yr 5mos",
            "work": [
                "Involved in the development of CASA Statement generation web application.",
                "Developed module for amortization schedule which can be incorporated within an existing system for generation of amort repayment schedule.",
                "Managing the Alert/Notification system and statement generation applications.",
                "Tech Stack - Java, MySQL, ReactJS, NodeJS, Javascript"
            ]
        }
    ]

    return (<>
        <div className='container min-vh-100 pt-5' id="experience">
            <h1 className='heading pt-5 text-center mb-4'>Experience</h1>
            <div className="d-flex justify-content-center pb-5">
                {
                    experience.map((exp, index) => (
                        <div className="exp-card mx-3" key={index}>
                            <div className="exp-banner">
                                <div className="exp-blurred-div"></div>
                                <div className="exp-div-company">
                                    <h5 className='exp-text-company'>{exp.name}</h5>
                                </div>
                                <img className="exp-img" src={exp.logo} alt="" />
                            </div>
                            <div className="exp-text-details"></div>
                            <h5 className='exp-text-role'>{exp.designation}</h5>
                            <h6 className='text-muted exp-text-location'>{exp.place}</h6>
                            <h5 className='exp-text-date'>{exp.duration}</h5>


                            <ul>
                                {
                                    exp.work.map((w,index) => (

                                        <li className="subtitle text-muted" key={index}>{w}</li>

                                    ))
                                }

                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>

    </>
    )
}
