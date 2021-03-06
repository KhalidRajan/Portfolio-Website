import React from "react";
import {BrowserRouter, Link } from "react-router-dom";
import "./navigation.css";

function Navigation(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <Link class="navbar-brand" to={"/"}><h3 className="logo">&lt;KR/&gt;</h3></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to={"/about"}>About Me</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/projects"}>Projects</Link>
                        </li>
                    </ul>

                </div>
            </div>



        </nav>
    )
}

export default Navigation;