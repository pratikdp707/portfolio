
import React from 'react'
import './projects.css'

export const Projects = () => {

    const projects = [{
        name: "The Blog",
        description: "A cloud based application for sharing knowledge, experiences or create a unique and beautiful blog.",
        technologies: "MongoDB - Express - React - Node.js - Bootstrap",
        username: "demo@gmail.com",
        password: "12345",
        github: "https://github.com/pratikdp707/TheBlog/",
        deploy: "https://theblog-pratikdp707.netlify.app/"

    }, {
        name: "iKeepNotes",
        description: "A cloud based note taking service web application. Notes are stored user specific. User can perform CRUD operations on their notes.",
        technologies: "MongoDB - Express - React - Node.js - Bootstrap",
        username: "demo@gmail.com",
        password: "12345",
        github: "https://github.com/pratikdp707/iKeepNotes",
        deploy: "https://ikeepnotes.netlify.app/"

    },
    {
        name: "Netflix UI Clone",
        technologies: "MongoDB - Express - React - Node.js",
        username: "demo@gmail.com",
        password: "demo",
        github: "https://github.com/pratikdp707/Netflix-clone",
        deploy: "https://mynetflixclone-app.netlify.app/"
    }, {
        name: "Inshorts Clone",
        description: "Web application which shows news based on the category selected by user.",
        technologies: "React - MaterialUI",
        github: "https://github.com/pratikdp707/inShorts-Clone-server",
        deploy: "https://pratikdp707-inshorts-clone.netlify.app/"
    }, {
        name: "Diet Suggestion App",
        description: "Web application which calculates BMI and suggest diet based on the data provided by user.",
        technologies: "MongoDB - Express - React - Node.js - Tailwind CSS",
        username: "dummykhan@gmail.com",
        password: "12345",
        github: "https://github.com/pratikdp707/DietSuggest-server",
        deploy: "https://diet-suggest-app.netlify.app/"
    }, {
        name: "Crypto App",
        description: "Web application which can be used to view details for cryptocurrency based on user search. Also displays details of top 50 Crypto coins.",
        technologies: "HTML - CSS - Javascript",
        github: "https://github.com/pratikdp707/cryptoAPI",
        deploy: "https://nostalgic-euclid-6d40d2.netlify.app/"
    },
    {
        name: "Weather App",
        description: "Web application which can be used to view weather of any location. The application automatically switches itself to dark and light mode wrt to system time.",
        technologies: "HTML - CSS - Javascript",
        github: "https://github.com/pratikdp707/weatherAPI",
        deploy: "https://unruffled-mcclintock-7f8b57.netlify.app/"
    }]


    return (
        <div className='container min-vh-100 pt-5' id="projects">
            <h1 className='heading text-center pt-5'>Projects</h1>
            <div className="row my-4">
                {projects.length > 0 &&
                    projects.map((project, index) => (
                        <div className="col-lg-6 col-md-12" key={index}>
                            <div className="card shadow p-3 mb-5 bg-body rounded mx-2">
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    {project.description && <h6 className="card-subtitle mb-2 text-muted">{project.description}</h6>}
                                    <h6 className="card-subtitle mb-4 text-tech">{project.technologies}</h6>
                                    {
                                        project.username && project.password &&
                                        <>
                                            <h6 className='card-subtitle mb-1 text-tech'>Demo Credentials:</h6>
                                            <div className='d-flex justify-content-between'>
                                                <h6 className='card-subtitle mb-3 text-tech'>Username : {project.username}</h6>
                                                <h6 className='card-subtitle mb-3 text-tech'>Password : {project.password}</h6>
                                            </div>
                                        </>
                                    }
                                    <div className="d-flex flex-row justify-content-between">
                                        <button
                                            type="button"
                                            className="btn btn-resume me-3"
                                            onClick={() => {
                                                window.open(project.github, "_blank");
                                            }}
                                        >
                                            View Code
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-resume"
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

                    ))}
            </div>
        </div>
    )
}
