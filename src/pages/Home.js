import React from 'react';
import Typed from 'react-typed'
import { Image, Col, Row, Button } from 'react-bootstrap'
import pic from '../assets/portrait.png'
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiMongodb, SiHtml5, SiCss3, SiCsharp } from 'react-icons/si';
import { DiDotnet } from 'react-icons/di';
import { VscJson } from 'react-icons/vsc';
import { BsKanban } from 'react-icons/bs';


function Home() {
    return (
        <div id="main">
            <Row>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pr-0 mr-0 ml-0">
                    <Image src={pic} className="portrait" alt="Portrait" />
                    <h2 style={{display:"flex", justifyContent:"center"}}>Full Stack Web Developer</h2>
                    <div className="row mb-3 mt-3" style={{position:"relative",display:"flex", justifyContent:"center"}}>
                        <div className="col-3 skill mb-1">
                            <h1 style={{marginLeft:"-27.3px"}}>{"{"}</h1>&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-outline-primary btn-sm skillButton">React : <FaReact size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-success btn-sm skillButton">Node.js : <FaNodeJs size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-info btn-sm skillButton">Bootstrap : <FaBootstrap size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-info btn-sm skillButton">C# : <SiCsharp size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-dark btn-sm skillButton">ES6+ : <SiJavascript size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-info btn-sm skillButton">ASP.NET : <DiDotnet size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-primary btn-sm skillButton">MySql : <SiMysql size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-success btn-sm skillButton">MongoDB : <SiMongodb size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-warning btn-sm skillButton">JSON : <VscJson size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-danger btn-sm skillButton">HTML5 : <SiHtml5 size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-primary btn-sm skillButton">CSS3 : <SiCss3 size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-secondary btn-sm skillButtonLast">Scrum : <BsKanban size={18} /></button>
                            &nbsp;&nbsp;&nbsp;<h1 style={{marginRight:"-27.3px"}}>{"}"}</h1>
                        </div>
                    </div>
                    
                    <br />
                    <Button variant="outline-secondary" href='/contact' style={{ width:"77.5%",marginBottom:"20px", display:"block", marginLeft:"auto", marginRight:"auto"}}>Contact Me ►</Button>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pl-0 mr-0 ml-0">
                    <h2>My Story</h2>
                    <p id="myStory">
                        I am a full stack web developer with hands-on experience in React and ASP.NET. 
                        I started my computer science journey during my BA Economics program at 
                        Indiana University in Bloomingtin by implementing regression analysis using a tool like Stata and fundamentals of Python.
                        College was also the time when I discovered web development - inbetween classes and my job at a coffee shop I used to dabble into 
                        making trivial web pages with just HTML, CSS and Javascript. After I graduated the university, I took some time to try different career paths.
                        Since fitness was the activity I was very much familiar with I took a route of a Personal Trainer. While training my clients I realized how much I revel in 
                        solving problems for them. Every client was unique and had a distinct set of training constraints in a form of injuries or specific goals. 
                        In the very beginning of 2020, when pandemia started I was forced to take a long break from training people and 
                        I decided to dedicate this time to do what I have been really wanting to since those attempts in web development in college. I signed up for a Coding Bootcamp
                        through University of Washington and had an absolutely amazing time learning fundamental and advanced web development skills.
                        My instructor and team that I was part of were the core drivers of my interactive learning. 
                        Every small problem I solved felt like a huge accomplishment to me and I continue carry on this attitude towards my work.
                        Right now I am developing several projects with ASP.NET and React to solidify my knowldege and stay in touch with the industry trends. 
                        My goal is to find a role that allows me to marry my passion for coding with scalable projects in React, ASP.NET, Node.js and many others.
                    </p>
                </div>
            </Row>


        </div>
    )
}

export default Home;