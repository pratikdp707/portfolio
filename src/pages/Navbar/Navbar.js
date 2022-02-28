import React from 'react'
import './navbar.css'
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">Pratik Parate</Link> */}
                    <a href="#home" className='navbar-brand fw-bold fs-3'>Pratik Parate</a>
                    <button className="navbar-toggler btn-dropdown" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='fa fa-bars '></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                                <a className="nav-link fs-5" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/about">About</Link> */}
                                <a className="nav-link fs-5" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link> */}
                                <a className="nav-link fs-5" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/experience">Experience</Link> */}
                                <a className="nav-link fs-5" href="#experience">Experience</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
