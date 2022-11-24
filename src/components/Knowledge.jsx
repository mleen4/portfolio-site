import React from "react";
import knowledgeData from "../knowledgeObjects";
import KnowledgeItem from './KnowledgeItem';


function CreateKnowledgeComponent(knowledge, i)
{
    return <KnowledgeItem
        key = {knowledge.key}
        title = {knowledge.title}
        description = {knowledge.description}
        heading = {knowledge.heading}
        tools = {knowledge.tools}
        example = {knowledge.example}
        icon = {knowledge.icon}
        github = {knowledge.github}
        />
}

const Knowledge = () => {
    return<div className="knowledge-container">
        <div className="knowledge-table">
            {knowledgeData.map(CreateKnowledgeComponent)}
        </div>
    </div>
    
}

export default Knowledge