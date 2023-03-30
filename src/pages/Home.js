import React from 'react';
import { Image, Row, Button } from 'react-bootstrap';
import pic from '../assets/portrait.png';
import { FaReact, FaNodeJs, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiMongodb, SiHtml5, SiCss3, SiSpring } from 'react-icons/si';
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
                            <button type="button" class="btn btn-outline-danger btn-sm skillButton">Java : <FaJava size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-dark btn-sm skillButton">ES6+ : <SiJavascript size={18} /></button> &nbsp; <h3>,</h3>
                        </div>
                        <div className="col-3 skill mb-1">
                            <button type="button" class="btn btn-outline-success btn-sm skillButton">Spring Boot : <SiSpring size={18} /></button> &nbsp; <h3>,</h3>
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
                    <h2>About me</h2>
                    <p id="myStory">
                        I am a full stack web developer with hands-on experience in React, Node.js, and Java Spring Framework. 
                        My academic credentials include Bachelor of Arts in Economics from Indiana University in Bloomington, 
                        Full Stack Web Development bootcamp through University of Washington and Java/React Native apprenticeship that
                        I completed through Southern Methodist University sponsored by my current employer Cognizant. For 1.5 years 
                        I have been working on back end applications as a developer for an Insurance Provider through Cognizant. 
                        My day-to-day tasks include writing code, debugging, job monitoring, etc. In addition, I perform 
                        quarterly releases for several internal and external applications. Most popular tools I use at my current job are
                        IntelliJ, MyEclipse, LDAP, Oracle SQL Developer, Oracle WebLogic Server, Java, React, Angular and many more. 
                        Most recently I worked on integrating a multifactor authentication for one of our external applications with over 1200 active users.
                        I updated application's API and tested for all edge cases. The project was done on Azure Active Directory B2C platform and was 
                        successfully released to the users. I am quite interested in back end development with Java and have done extensive production work with it.
                        My goal is to work on an exciting product with a team of professionals from diverse academic backgrounds. I am a passionate learner and 
                        a goal-oriented person. Please reach out to me if you have any questions.
                    </p>
                </div>
            </Row>


        </div>
    )
}

export default Home;