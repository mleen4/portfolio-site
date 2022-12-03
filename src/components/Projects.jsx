import React from "react";
import ProjectItem from "./ProjectItem";
import projectObjects from "../projectObjects.js"
import chameleonIcon from "../static/images/Chameleon.svg"


// const CreateProjectComponent(project, i)
// {

// }



function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects:</h1>
            <div className="projects-list">
                <div className="project-row">
                    <ProjectItem
                        image = {chameleonIcon}
                        text = {projectObjects[0].text}
                        href = {projectObjects[0].href}
                    />
                    <ProjectItem
                        image = "null"
                        text = {projectObjects[1].text}
                        emptyProjectTitle = {projectObjects[1].projectEmptyTitle}
                        href = {projectObjects[1].href}
                    />
                </div>
                
            </div>

        </div>
    )
}

export default Projects