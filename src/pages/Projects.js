import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Particles } from "react-particles-js"
import MMGMA from '../assets/mobileAppGif.gif';
import YNC from '../assets/phoneOutline.png';
import GBS from '../assets/googleBooks.png'
import MMG from '../assets/myMiniGallery.png'
import "./Projects.css"
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiMongodb, SiExpo, SiGoogle } from 'react-icons/si';

function Projects() {
    return (
        <div className="cont">
            <section className="project" id="one">
                <div style={{ position: "absolute", bottom: "2rem", width: "100%", height: "100%" }}>
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 500,
                                    density: {
                                        enable: true,
                                        value_area: 850
                                    }
                                },
                                opacity: {
                                    value: 1,
                                    random: true,
                                    anim: {
                                        encable: true,
                                        speed: 0.6,
                                        opacity_min: 0,
                                        sync: true
                                    }
                                },
                                size: {
                                    value: 1.5,
                                    random: true,
                                    anim: {
                                        encable: true,
                                        speed: 2,
                                        opacity_min: 5,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: false,
                                    distance: 150,
                                    opacity: 0.4,
                                    width: 1
                                },
                                color: "#e25822",
                                move: {
                                    enable: true,
                                    speed: 5.5,
                                    direction: "right",
                                    random: true,
                                    straight: false,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            }
                        }}
                    />
                </div>
                <Card style={{ width: '36rem' }}>
                    <Card.Img variant="top" src={MMG} />
                    <Card.Body>
                        <Card.Title>
                            My Mini Gallery
                        </Card.Title>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h5>{"{"}</h5>
                            <p style={{ color: "blue" }}>React : <FaReact size={14} /> , </p>
                            <p style={{ color: "green" }}>Node.js : <FaNodeJs size={14} /> , </p>
                            <p style={{ color: "purple" }}>Bootstrap : <FaBootstrap size={14} /> , </p>
                            <p style={{ color: "green" }}>MongoDB : <SiMongodb size={14} /></p>
                            <h5>{"}"}</h5>
                        </div>
                        <Card.Text>
                            Interactive application for artists to share artwork and educate.
                        </Card.Text>
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Button className="projectLink" variant="outline-dark" href="https://my-mini-gallery.herokuapp.com/" target="blank">Application</Button>
                            <Button className="projectLink" variant="outline-primary" href="https://github.com/Amal31497/My-Mini-Gallery" target="blank">Repository</Button>
                        </div>
                    </Card.Body>
                </Card>
                <div style={{ position: "absolute", right: "170px" }}>
                    <Button variant="outline-light" href="#two" style={{ width: "50px", height: "50px" }}><VscChevronDown /></Button>
                </div>
            </section>
            <section className="project" id="two">
                <div style={{ position: "absolute", bottom: "2rem", width: "100%", height: "100%" }}>
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 800,
                                    density: {
                                        enable: true,
                                        value_area: 850
                                    }
                                },
                                opacity: {
                                    value: 1,
                                    random: true,
                                    anim: {
                                        encable: true,
                                        speed: 0.6,
                                        opacity_min: 0,
                                        sync: true
                                    }
                                },
                                size: {
                                    value: 1.0,
                                    random: true,
                                    anim: {
                                        encable: true,
                                        speed: 2,
                                        opacity_min: 5,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: false,
                                    distance: 150,
                                    opacity: 0.4,
                                    width: 1
                                },
                                color: "#FFFFFF",
                                move: {
                                    enable: true,
                                    speed: 8.5,
                                    direction: "right",
                                    random: true,
                                    straight: true,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            }
                        }}
                    />
                </div>
                <Card style={{ width: '44rem', height: "22.7rem", background: "rgb(247,247,247)" }}>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-3 col-xs-1">
                            <Card.Img variant="top" style={{ position: "relative", height: "300px", width: "150px", background: "white", marginLeft: "auto", marginRight: "auto", backgroundColor: "grey" }} src={YNC} />
                            <img style={{ position: "absolute", width: "130px", height: "228px", left: "26px", top: "38px" }} src={MMGMA} />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-xs-11">
                            <Card.Body>
                                <Card.Title>My Mini Gallery Mobile App</Card.Title>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h5>{"{"}</h5>
                                    <p style={{ color: "blue" }}>React Native : <FaReact size={14} /> , </p>
                                    <p style={{ color: "black" }}>Expo : <SiExpo size={14} /></p>
                                    <h5>{"}"}</h5>
                                </div>
                                <Card.Text>
                                    Mobile app version of the My Mini Gallery Website.
                                    Connected to the same API and has all the same CRUD functionality as the web application.
                                    Built with react native and EXPO. The mobile app is currently not published yet as I am waiting for approval from apple store.
                                </Card.Text>
                                <Button className="githubButtonSingle" variant="outline-primary" href="https://github.com/Amal31497/my-mini-gallery-mobile-app" target="blank">Repository</Button>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <div style={{ position: "absolute", right: "170px" }}>
                    <Button variant="outline-light" href="#three" style={{ width: "50px", height: "50px" }}><VscChevronDown /></Button>
                </div>
            </section>
            <section className="project" id="three">
            <div style={{ position: "absolute", bottom: "2rem", width: "100%", height: "100%" }}>
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 500,
                                    density: {
                                        enable: true,
                                        value_area: 850
                                    }
                                },
                                opacity: {
                                    value: 1,
                                    random: true,
                                    anim: {
                                        encable: true,
                                        speed: 0.6,
                                        opacity_min: 0,
                                        sync: true
                                    }
                                },
                                size: {
                                    value: 1.5,
                                    random: true,
                                    anim: {
                                        encable: true,
                                        speed: 2,
                                        opacity_min: 5,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: false,
                                    distance: 150,
                                    opacity: 0.4,
                                    width: 1
                                },
                                color: "#726A95",
                                move: {
                                    enable: true,
                                    speed: 5.5,
                                    direction: "right",
                                    random: true,
                                    straight: false,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            }
                        }}
                    />
                </div>
                <Card style={{ width: '36rem' }}>
                    <Card.Img variant="bottom" src={GBS} />
                    <Card.Body>
                        <Card.Title>Google Books Search</Card.Title>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h5>{"{"}</h5>
                            <p style={{ color: "blue" }}>React : <FaReact size={14} /> , </p>
                            <p style={{ color: "black" }}>Google Boooks API : <SiGoogle size={14} /></p>
                            <p style={{ color: "green" }}>Node.js : <FaNodeJs size={14} /> , </p>
                            <p style={{ color: "green" }}>MongoDB : <SiMongodb size={14} /></p>
                            <h5>{"}"}</h5>
                        </div>
                        <Card.Text>
                            Full Stack React application that allows user to search for their favorite books and save them to favorites.
                        </Card.Text>
                        <div style={{display:"flex", justifyContent:"space-evenly"}}>
                            <Button className="projectLink" variant="outline-dark" href="https://guarded-castle-60005.herokuapp.com/" target="blank">Application</Button>
                            <Button className="projectLink" variant="outline-primary" href="https://github.com/Amal31497/Google-Books-Search" target="blank">Repository</Button>
                        </div>
                    </Card.Body>
                </Card>
                <div style={{ position: "absolute", bottom: "60px", left: "auto", right: "auto" }}>
                    <Button variant="outline-light" href="#one" style={{ width: "200px" }}><VscChevronUp /></Button>
                </div>
            </section>
        </div>
    )
}

export default Projects;