import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Particles } from "react-particles-js"
import YNC from '../assets/yourNeighborChef.png';
import GBS from '../assets/googleBooks.png'
import MMG from '../assets/myMiniGallery.png'
import "./Projects.css"
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
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
                        <Card.Title>My Mini Gallery</Card.Title>
                        <Card.Text>
                            Interactive application for artists to share artwork and educate.
                        </Card.Text>
                        <Button variant="outline-dark" href="https://my-mini-gallery.herokuapp.com/" target="blank">Application</Button>
                        <Button variant="outline-primary" href="https://github.com/Amal31497/My-Mini-Gallery" target="blank">Repository</Button>
                    </Card.Body>
                </Card>
                <div style={{ position: "absolute", right: "170px" }}>
                    <Button variant="outline-light" href="#two" target="blank" style={{ width: "50px", height: "50px" }}><VscChevronDown /></Button>
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
                <Card style={{ width: '36rem' }}>
                    <Card.Img variant="bottom" src={YNC} />
                    <Card.Body>
                        <Card.Title>Your Neighbor Chef</Card.Title>
                        <Card.Text>
                            With this application users can search local chefs in their neighborhood and order meals (In development)
                        </Card.Text>
                        <Button variant="outline-dark" href="https://boiling-mesa-93312.herokuapp.com/" target="blank">Application</Button>
                        <Button variant="outline-primary" href="https://github.com/Amal31497/Your-Neighbor-Chef" target="blank">Repository</Button>
                    </Card.Body>
                </Card>
                <div style={{ position: "absolute", right: "170px" }}>
                    <Button variant="outline-light" href="#three" target="blank" style={{ width: "50px", height: "50px" }}><VscChevronDown /></Button>
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
                        <Card.Text>
                            Full Stack React application that allows user to search for their favorite books and save them to favorites.
                        </Card.Text>
                        <Button variant="outline-dark" href="https://guarded-castle-60005.herokuapp.com/" target="blank">Application</Button>
                        <Button variant="outline-primary" href="https://github.com/Amal31497/Google-Books-Search" target="blank">Repository</Button>
                    </Card.Body>
                </Card>
                <div style={{ position: "absolute", bottom: "60px", left: "auto", right: "auto" }}>
                    <Button variant="outline-light" href="#one" target="blank" style={{ width: "200px" }}><VscChevronUp /></Button>
                </div>
            </section>
        </div>
    )
}

export default Projects;