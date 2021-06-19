import React from 'react';
import Typed from 'react-typed'
import { Image, Col, Row, Button } from 'react-bootstrap'
import pic from '../assets/portrait.png'


function Home() {
    return (
        <div  id="main">
            <Row>
                <Col className="left">
                    <Image src={pic} className="portrait" alt="Portrait" />
                    <h2>My Full Stack (MERN)</h2>
                    <ul>
                        <li>
                            <strong>
                                Back-end :
                            </strong>
                            <Typed
                                className="typed-text"
                                strings={["ExpressJS", "NodeJS"]}
                                typeSpeed={70}
                                backSpeed={50}
                                loop
                            />
                        </li>
                        <li>
                            <strong>
                                Database :
                            </strong>
                            <Typed
                                className="typed-text"
                                strings={["MongoDB - Mongoose", "SQL - Sequelize"]}
                                typeSpeed={70}
                                backSpeed={50}
                                loop
                            />
                        </li>
                        <li>
                            <strong>
                                Front End :
                            </strong>
                            <Typed
                                className="typed-text"
                                strings={["Jquery", "React", "React Hooks", "Functional Components"]}
                                typeSpeed={70}
                                backSpeed={50}
                                loop
                            />
                        </li>
                    </ul>
                    
                    
                    
                </Col>
                <Col>
                    <h2>My Story</h2>
                    <p id="myStory">
                        I am an aspiring full stack software engineer currently finishing a coding bootcamp at the University of Washington. Originally, I am from Kazakhstan, and I have been to 13 different states. Currently I am residing in Santa Monica, California. I moved here because I love the beach and I am hoping to get a SWE position in one of the local companies. My programming experience is centered around the MERN stack. I am also quite familiar with MVC development model and used it in many projects. I enjoy good food and watching movies. Likewise I am a big fan of working out. As an ex-competitive professional swimmer, fitness plays a huge role in my life and mental health. Please get in touch with me if you have any questions or would just like to chat!   
                    </p>
                    <Button variant="outline-secondary" href='/contact'>Contact Me ►</Button>
                </Col>
            </Row>


        </div>
    )
}

export default Home;