import React from "react";

function Project(props){
    return(
        <div className="row justify-content-center">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                        <a href={props.link} class="btn btn-primary">Source Code/Project Overview</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;