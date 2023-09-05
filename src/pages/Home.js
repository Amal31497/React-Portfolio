import React from 'react';
import { Image, Row, Button } from 'react-bootstrap';
import pic from '../assets/portrait.png';
import { FaReact, FaNodeJs, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiMongodb, SiHtml5, SiCss3, SiSpring } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { BsKanban } from 'react-icons/bs';


function Home() {
    return (
        <div id="main">
            <Row>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pr-0 mr-0 ml-0">
                    <Image src={pic} className="portrait" alt="Portrait" />
                    <h2 style={{display:"flex", justifyContent:"center"}}>Software Engineer</h2>
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
                        I am a software engineer with 2 years of experience in back end software development in Java (8,11), React, AWS an many other tools.
                        Currently I am working with a variety of company internal and external applications with steadily increasing number of users.
                        My daily tasks include reading/writing code in Java, debugging, monitoring Linux and Windows servers for issues related to application deployments.
                        So far, the biggest achievement for me was integrating a Multifactor Authentication for one of the external applications with over 1200 users.
                        I successfully updated the exising REST api structure and ensured quality by developing a full test suite for this feature.
                        The tools I used were, Azure Microsoft Graph API, Active Directory, LDAP and Kerberos. Ultimately, the feature was approved and deployed to production.
                        Outside of my career, I am also pursuing a Master of Science in Computer Science from Georgia Institute of Technology. My specialization is Computing Systems 
                        and I am focusing my studies on learning about Distributed Systems and Software Architecture. My academic projects are concentrated on Concurrency, 
                        Software Optimization and I mostly use C/C++ and Java. Outside of work and school, I enjoy hiking, fishing, and playing with my dog.
                    </p>
                </div>
            </Row>


        </div>
    )
}

export default Home;