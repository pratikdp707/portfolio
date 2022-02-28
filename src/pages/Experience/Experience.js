import React from 'react'
import './experience.css'
export const Experience = () => {

    const experience = [
        {
            "logo" : "https://seekvectorlogo.com/wp-content/uploads/2020/05/rbl-bank-ltd-vector-logo.png",
            "name" : "RBL Bank",
            "designation" : "Manager - Technology & Solutions",
            "place" : "Mumbai, Maharashtra, India.",
            "duration" : "Full Time - 1yr 5mos",
            "timeline" : [
                {
                    "desig" : "Manager - Technology & Solutions",
                    "time" : "Oct 2022 - Present"
                },
                {
                    "desig" : "Technology Trainee",
                    "time" : "Oct 2022 - Oct 2021"
                }
            ]
        }
    ]

  return (
    <div className='container min-vh-100 bg-light' id="experience">
        <h1 className='heading pt-5 text-center'>Experience</h1>
        <div className='text-center mt-5'>
        {
            experience.map(exp => (
                <>
                    <img className="company-logo" src={exp.logo} alt="" />
                    <p className='mb-1 cmp-details'>{exp.name}</p>
                    <p className='mb-1 cmp-details'>{exp.designation}</p>
                    <p className='mb-1 cmp-details'>{exp.place}</p>
                    <p className='mb-2 cmp-details'>{exp.duration}</p>
                    {
                        exp.timeline.map(timelines => (
                            <>
                                <h5>|</h5>
                                <div className='d-flex flex-row justify-content-center'>
                                <p className=''>{timelines.time} : </p>

                                <p className=''> &nbsp;{timelines.desig}</p>
                                </div>
                            </>
                        ))
                    }
                </>
            ))
        }
        </div>
    </div>
  )
}
