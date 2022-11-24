import React from "react";
import ProjectItem from "./ProjectItem";


// const CreateProjectComponent(project, i)
// {

// }



function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects:</h1>
            <div className="projects-list">
                <div className="project-row">
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
                
            </div>

        </div>
    )
}

export default Projects