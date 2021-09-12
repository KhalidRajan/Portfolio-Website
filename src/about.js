import React from "react";
import "./about.css";

function About(){
    return(
        <div className="about">
            <span className="img-container">
                <img className="profile-pic" src="/images/khalid.png" alt="Profile Picture"/>
            </span>
            <div className="about-text">
                <p>I am a software engineer and I have a passion for writing code and developing software that solves complex problems.
                I am currently pursuing a Computer Engineering undergraduate degree at Queen's University.  I make a concerted effort to independently extend my learning beyond the classroom by pursuing online courses and working on cool projects.</p>
                <br/>
                <p>I have prior experience constructing software applications utilizing Python, Java, JavaScript, MySQL and MongoDB.  My strong grasp of algorithms, data structures, and design patterns such as Object-Oriented Programming enable me to utilize these tools to build apps that solve problems.  I have taken the initiative to independently learn about Full-Stack Web Development and various front-end and back-end development frameworks.  
                My favorite framework to work with is React.js, as I love the simplicity, reusability, and modularity of React applications.</p>
                <br/>
                <p>I am fascinated by developments in the Machine Learning field.  I have completed the Machine Learning course offered by Stanford Univeristy and the Deep Learning specialization on Coursera offered by deeplearning.ai to improve my understanding of different supervised and unsupervised learning algorithms and neural networks.
                I have competency utilizing Python and the Pandas, NLTK, SpaCy, Sci-kit Learn, TensorFlow and Keras to preprocess data and build powerful ML models.
                I love to engage in projects, where I have an opportunity to leverage Machine Learning and manipulate data to extract meaningful insights.
                </p>
                <br/>
                <p>I am a life-long Arsenal, Toronto Raptors, and Toronto Blue Jays fan.  Outside of sports, I enjoy reading books and binge-watching series/movies on Netflix.  I am also a passionate traveller, as I enjoy exploring new cities and cultures around the world!</p>
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