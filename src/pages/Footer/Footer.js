import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container pt-4">
                    <p className=' reach mb-1'>Reach Out to me!</p>
                    <p className='location mt-0 mb-2'><i className="fas fa-mobile-alt"></i>&nbsp;9130551453</p>
                    <p className='location mt-0 mb-0'><i className="fas fa-map-marker-alt"></i>&nbsp;Nagpur</p>
                    <p className='opportunity mt-0'>Open For Opportunities : <span className='span-opp'>Yes</span></p>
                    <div className='pb-4 d-flex justify-content-start text-center'>
                        <a href="https://github.com/pratikdp707" target="_blank" rel="noreferrer"><i className="me-2 fab fa-github github-icon"></i></a>
                        <a href="mailto:pratikparate707@gmail.com" target="_blank" rel="noreferrer"><i className="mx-2 fab fa-google google-icon"></i></a>
                        <a href="https://linkedin.com/in/pratik-parate-70b008137/" target="_blank" rel="noreferrer"><i className="mx-2 fa fa-linkedin linkedin-icon"></i></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer