import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css"

function Home(){
    return (
        <div className="home" style={{backgroundImage: "url(images/software.jpg)"}}>
                <h1>Hey, I am Khalid!</h1>
                <div className="typewrite">
                    <Typewriter
                        onInit={(typewriter)=>{
                            typewriter

                            .typeString("I am a Software Engineer.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I am pursuing a Bachelor's degree in Computer Engineering.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I love writing code and building cool apps!")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I am very interested in developments in the Machine Learning realm.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Please feel free to reach out!")
                            .start();
                        }}
                    />
                </div>
        </div>
    );
}

export default Home;