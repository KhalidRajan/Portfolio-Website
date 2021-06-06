import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./home"
import Navigation from './navigation';
import About from './about';
import Projects from "./projects";
import Footer from "./footer";

function App() {
    return(
        <BrowserRouter>
            <Navigation/>
            <Switch>
                {/* <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />   
                </Route>
                <Route exact path="/projects">
                    <Projects/>
                </Route> */}
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/projects" component={Projects}/>
            </Switch> 
        </BrowserRouter>
    )

}

export default App;
