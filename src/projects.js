import React from "react";
import "./projects.css";
import Project from "./project";
import projects from "./project_data";

function Projects(){
    return(

        projects.map(project=>{
            return (<Project
                image={project.image}
                title={project.title}
                content={project.content}
                link={project.link}
            />);
        })

        // <div className="projects">
        //     <div className="container">
        //         <div class="row justify-content-center">
        //             <div className="col-lg-4">
        //                 <div className="card">
        //                     <div className="card-body">
        //                         <h5 className="card-title">Face Mask Detection Application</h5>
        //                         <p className="card-text">I developed a custom Convolutional Neural Network (CNN) using Keras to detect if individuals are wearing face masks.  I trained the CNN using a Kaggle dataset containing 25,000 images.  I then used the CNN in an OpenCV application to recognize if individuals are wearing face masks in real-time by capturing video from webcams and then utilizing the Haar Cascade classifier to recognize faces in the video captures and then applying the CNN to predict if individuals are wearing face masks.</p>
        //                         <a href="https://github.com/KhalidRajan/Face-Mask-Detection" class="btn btn-primary">Source Code</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row justify-content-center">
        //             <div className="col-lg-4">
        //                 <div className="card">
        //                     <div className="card-body">
        //                         <h5 className="card-title">Namara Named Entity Recognition and Resolution</h5>
        //                         <p className="card-text">In a group of 4 students, we worked on a NLP project for ThinkData Works, a start-up based in Toronto.  The objective of the project was to develop a Named Entity Recognition (NER) and Entity Resolution technology that could be incorporated into ThinkData Works' marquee product, Namara.  We extracted 3000 different data values from the Namara API and we utilized this data to build a Random Forest model utilizing the Sci-kit Learn library in Python that recognizes different entities (person, place, organization) in sentences.  We then calculated Levenshtein and Jaro distances and leveraged K-Means Clustering in Sci-kit Learn to resolve different representations of a common entity (i.e. Think Data Works, Think Data, TDW), and this forms the base for a future project that involves creating knowledge graphs.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row justify-content-center">
        //             <div className="col-lg-4">
        //                 <div className="card">
        //                     <div className="card-body">
        //                         <h5 className="card-title">CV Website</h5>
        //                         <p className="card-text">Utilizing React.js I created a web application to highlight my personal projects, skills, and experience and share my resume.  I utilized the Bootstrap framework to apply responsive styling to the web app.</p>
        //                         <a href="" className="btn btn-primary">Source Code</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row justify-content-center">
        //             <div className="col-lg-4">
        //                 <div className="card">
        //                     <div className="card-body">
        //                         <h5 className="card-title">Wikipedia Page Summarizer</h5>
        //                         <p className="card-text">I created a Python app to summarize the contents of Wikipedia pages.  The app utilizies the Requests and BeautifulSoup libraries to scrape content from the Wikipedia pages.  The app then uses the NLTK library to preprocess the scraped content, and implements a word frequency-based scoring system to extract the most important sentences which form the summary of the Wikipedia page content.</p>
        //                         <a href="https://github.com/KhalidRajan/Wikipedia-Page-Summarizer/tree/main" className="btn btn-primary">Source Code</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row justify-content-center">
        //             <div className="col-lg-4">
        //                 <div className="card">
        //                     <div className="card-body">
        //                         <h5 className="card-title">Simon Game</h5>
        //                         <p>I created a web-based version of the Simon Game utilizing JavaSript and jQuery.  The Simon game is a memory-testing game that generates and displays a random sequence of lights to the user, and requires the user to repeat this exact sequence to proceed to the next level.  I utilized JavaScript to produce the random patterns and then jQuery to display the random patterns to the user, and verify that the user repeated the pattern identically.</p>
        //                         <a href="https://github.com/KhalidRajan/My-Simon-Game" className="btn btn-primary">Source Code</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    );
}
export default Projects;