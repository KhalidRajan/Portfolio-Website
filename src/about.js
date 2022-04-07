import React from "react";
import "./about.css";

function About(){
    return(
        <div className="about">
            <span className="img-container">
                <img className="profile-pic" src="/images/khalid.png" alt="Profile Picture"/>
            </span>
            <div className="about-text">
                <p>I am a software engineer and I have a passion for developing software and leveraging accelerating technologies to solve complex problems.
                I am currently pursuing a Computer Engineering undergraduate degree at Queen's University.</p>
                <br/>
                <p>I have prior experience constructing software applications utilizing Python, Java, JavaScript, MySQL and MongoDB.  My strong grasp of core CS fundamentals including algorithms, data structures, and Object-Oriented design provide me with a strong foundation to add new technologies and frameworks to my arsenal.</p>
                <br/>
                <p>I am especially passionate about developments in the Artificial Intelligence space.  I enjoy working on projects, where I can leverage state-of-the-art Machine Learning techniques.  I have proficiency working with modern Natural Language Processing (NLP) tools and techniques to help machines interpret and extract insight from the human language.</p>
                <br/>
                <p>I am a life-long Arsenal and Toronto Raptors fan.  Aside from sports, I enjoy reading books and binge-watching series/movies on Netflix.  I am also a passionate traveller, as I enjoy exploring new cities and cultures around the world.</p>
                <br/>
                <p>Please feel free to connect with me on LinkedIn and reach out!</p>
            </div>
            <div className="social-logos">
                <a href="https://www.linkedin.com/in/khalid-rajan-620771156/"><img src="images/linkedin-icon.png"/></a>
                <a href="https://github.com/KhalidRajan"><img src="images/github-icon.png"/></a>
                <a href="https://twitter.com/KhalidRajan"><img src="images/twitter-icon.png"/></a>
            </div>
        </div>

    );
}

export default About;