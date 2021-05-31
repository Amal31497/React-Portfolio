import React, {useState} from 'react';
import { Card, Button, Row, Carousel, CarouselItem, Col } from 'react-bootstrap'
import ED from '../assets/employeeDirectory.png';
import TB from '../assets/techBlog.png';
import LNM from '../assets/lostNoMore.png';
import YNC from '../assets/yourNeighborChef.png';
import GBS from '../assets/googleBooks.png'
import MMG from '../assets/myMiniGallery.png'

function Projects() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Row style={{justifyContent:'center', height:'33rem', alignContent:'center', backgroundColor:'#e4e4e4' }}>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{paddingTop:"2px"}}>
                <CarouselItem>
                    <Card style={{ width: '58rem', height: '23rem', backgroundColor: '#e4e4e4',display:"flex" }}>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={ED} style={{height:"20rem",width:"34rem"}}/>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title><strong>Employee Directory</strong></Card.Title>
                                    <Card.Text style={{ lineHeight: '2rem' }}>
                                        This application is designed to create an easy way to navigate one's employees information. Using random user API, this app displays random users with specific personal non-sensitive information. A user can filter and sort users by name and location.
                            </Card.Text>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://quiet-beach-68881.herokuapp.com/" target="blank">Application</Button>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://github.com/Amal31497/Employee-Directory-React" target="blank">Repository</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{ width: '58rem', height: '23rem', backgroundColor: '#e4e4e4' }}>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={LNM} style={{height:"20rem",width:"34rem"}}/>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title><strong>Lost No More</strong></Card.Title>
                                    <Card.Text style={{ lineHeight: '2rem', marginBottom: '2.42rem' }}>
                                        Lost No More is an application designed for avid travellers. Users can view weather as well as information about popular spots in a particular city. Users do not need to register.
                            </Card.Text>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://obrienceob.github.io/LostNoMore/" target="blank">Application</Button>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://github.com/obrienceob/LostNoMore" target="blank">Repository</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{ width: '58rem', height: '23rem', backgroundColor: '#e4e4e4' }}>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={YNC} style={{height:"20rem",width:"28rem"}}/>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title><strong>Your Neighbor Chef</strong></Card.Title>
                                    <Card.Text style={{ lineHeight: '2rem' }}>
                                        Inspired by good food and quarantine lifestyle, Your Neighbor Chef is designed for users to find local chefs in their neighborhoods and order food from them.
                            </Card.Text>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://boiling-mesa-93312.herokuapp.com/" target="blank">Application</Button>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://github.com/Amal31497/Your-Neighbor-Chef" target="blank">Repository</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{ width: '58rem', height: '23rem', backgroundColor: '#e4e4e4' }}>
                        <Row>
                            <Col style={{alignSelf:"center", display:"flex"}}>
                                <Card.Img variant="top" src={TB} style={{ height:"9rem",width:"30rem", marginBottom: '3.7rem' }} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title><strong>Tech Blog</strong></Card.Title>
                                    <Card.Text style={{ lineHeight: '2rem' }}>
                                        With this app user can share their thoughts in a form of a blog. The application allows user to post update and deleter their own posts. Each user had to sign up before posting however can view other posts without having an account. Likewise, registered users may post comments under posts and then deleter them if necessary.
                                    </Card.Text>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://limitless-reaches-70428.herokuapp.com/" target="blank">Application</Button>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://github.com/Amal31497/tech-blog" target="blank">Repository</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{ width: '58rem', height: '23rem', backgroundColor: '#e4e4e4' }}>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={GBS} style={{ marginBottom: '3.7rem', height:"20rem", width:"33rem" }} />
                            </Col>
                            <Col>
                                <Card.Body >
                                    <Card.Title><strong>Google-Books-Search</strong></Card.Title>
                                    <Card.Text style={{ lineHeight: '2rem' }}>
                                        This application allows user to search books using a Google Books API and save them into their favorites. Users can save and delete books from their favorites list.
                                    </Card.Text>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://guarded-castle-60005.herokuapp.com/" target="blank">Application</Button>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://github.com/Amal31497/Google-Books-Search" target="blank">Repository</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{ width: '58rem', height: '23rem', backgroundColor: '#e4e4e4' }}>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={MMG} style={{ marginBottom: '0.4rem', height:"20rem", width:"30rem" }} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title><strong>My-Mini-Gallery</strong></Card.Title>
                                    <Card.Text style={{ lineHeight: '2rem' }}>
                                        With this app user can share their thoughts in a form of a blog. The application allows user to post update and deleter their own posts. Each user had to sign up before posting however can view other posts without having an account. Likewise, registered users may post comments under posts and then deleter them if necessary.
                            </Card.Text>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="" target="blank">Application</Button>
                                    <Button variant="primary" style={{ marginLeft: '3rem' }} href="https://github.com/Amal31497/My-Mini-Gallery" target="blank">Repository</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </CarouselItem>
            </Carousel>
        </Row>
    )
}

export default Projects;