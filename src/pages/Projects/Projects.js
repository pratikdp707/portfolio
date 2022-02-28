
import React from 'react'
import './projects.css'

export const Projects = () => {

    const projects = [{
        name: "Netflix UI Clone",
        technologies: "MongoDB - Express - React - Node.js",
        username: "demo@gmail.com",
        "password": "demo",
        github: "https://github.com/pratikdp707/Netflix-clone",
        deploy: "http://54.173.113.177/"
    }, {
        name: "Inshorts Clone",
        technologies: "MongoDB - Express - React - Node.js",
        github: "https://github.com/pratikdp707/inShorts-Clone-server",
        deploy: "https://pratikdp707-inshorts-clone.netlify.app/"
    }, {
        name: "Diet Suggestion App",
        technologies: "MongoDB - Express - React - Node.js",
        username: "demo@gmail.com",
        "password": "demo",
        github: "https://github.com/pratikdp707/DietSuggest-server",
        deploy: "https://diet-suggest-app.netlify.app/login"
    }, {
        name: "Crypto App",
        technologies: "HTML - CSS - Javascript",
        github: "https://github.com/pratikdp707/cryptoAPI",
        deploy: "https://nostalgic-euclid-6d40d2.netlify.app/"
    }]


    return (
        <div className='container min-vh-100 ' id="projects">
            <h1 className='heading text-center pt-5'>Projects</h1>
            <div className="row my-4">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <>
                            <div className="col-md-6">
                                <div className="card shadow p-3 mb-5 bg-body rounded me-5">
                                    <div className="card-body">
                                        <h5 class="card-title">{project.name}</h5>
                                        <h6 class="card-subtitle mb-4 text-muted">{project.technologies}</h6>
                                        
                                        <div className="d-flex flex-row">
                                            <button
                                                type="button"
                                                class="btn btn-resume me-3"
                                                onClick={() => {
                                                    window.open(project.github, "_blank");
                                                }}
                                            >
                                                View Code
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-resume"
                                                onClick={() => {
                                                    window.open(project.deploy, "_blank");
                                                }}
                                            >
                                                View App
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
        </div>
    )
}
