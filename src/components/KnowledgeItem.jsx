import React from "react";


const KnowledgeItem = (props) =>
{
    return <div className="knowledge-column">
        <div className="knowledge-title">
            <h3>{props.title}</h3>
        </div>
        <div className="knowledge-icon">

        </div> 
        <div className="knowledge-description">
            <p>{props.description}</p>
        </div> 
        <div className="knowledge-tools">
            <h4>{props.heading}</h4>
            <p>{props.tools}</p>
        </div>
        <div className="knowledge-example">
            <h4>Example:</h4>
            <p>{props.example}</p>
        </div>




    </div>
    
}

export default KnowledgeItem