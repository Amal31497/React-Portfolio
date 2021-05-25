import React, {useState} from 'react';
import { Card, Button, Row, Carousel, CarouselItem } from 'react-bootstrap'
import ED from '../assets/employeeDirectory.png';
import TB from '../assets/techBlog.png';
import LNM from '../assets/lostNoMore.png';
import YNC from '../assets/yourNeighborChef.png';

function Projects() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Row style={{justifyContent:'center', height:'42rem', alignContent:'center', backgroundColor:'#e4e4e4' }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <CarouselItem>
                    <Card style={{ width: '25rem', height: '38rem', backgroundColor:'#e4e4e4' }}>
                        <Card.Img variant="top" src={ED} />
                        <Card.Body>
                            <Card.Title><strong>Employee Directory</strong></Card.Title>
                            <Card.Text style={{ lineHeight: '2rem' }}>
                                This application is designed to create an easy way to navigate one's employees information. Using random user API, this app displays random users with specific personal non-sensitive information. A user can filter and sort users by name and location.
                            </Card.Text>
                            <Button variant="primary" style={{ marginLeft: '3rem' }}>Application</Button>
                            <Button variant="primary" style={{ marginLeft: '3rem' }}>Repository</Button>
                        </Card.Body>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{ width: '25rem', height: '38rem', backgroundColor:'#e4e4e4' }}>
                        <Card.Img variant="top" src={LNM} />
                        <Card.Body>
                            <Card.Title><strong>Lost No More</strong></Card.Title>
                            <Card.Text style={{ lineHeight: '2rem', marginBottom: '2.42rem' }}>
                                Lost No More is an application designed for avid travellers. Users can view weather as well as information about popular spots in a particular city. Users do not need to register.
                            </Card.Text>
                            <Button variant="primary" style={{ marginLeft: '3rem' }}>Application</Button>
                            <Button variant="primary" style={{ marginLeft: '3rem' }}>Repository</Button>
                        </Card.Body>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{ width: '25rem', height: '38rem', backgroundColor:'#e4e4e4' }}>
                        <Card.Img variant="top" src={YNC} />
                        <Card.Body>
                            <Card.Title><strong>Your Neighbor Chef</strong></Card.Title>
                            <Card.Text style={{ lineHeight: '2rem' }}>
                                Inspired by good food and quarantine lifestyle, Your Neighbor Chef is designed for users to find local chefs in their neighborhoods and order food from them.
                            </Card.Text>
                            <Button variant="primary" style={{ marginLeft: '3rem' }}>Application</Button>
                            <Button variant="primary" style={{ marginLeft: '3rem' }}>Repository</Button>
                        </Card.Body>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{ width: '25rem', height: '38rem', backgroundColor:'#e4e4e4' }}>
                        <Card.Img variant="top" src={TB} style={{ marginBottom: '3.7rem' }} />
                        <Card.Body>
                            <Card.Title><strong>Tech Blog</strong></Card.Title>
                            <Card.Text style={{ lineHeight: '2rem' }}>
                                With this app user can share their thoughts in a form of a blog. The application allows user to post update and deleter their own posts. Each user had to sign up before posting however can view other posts without having an account. Likewise, registered users may post comments under posts and then deleter them if necessary.
                            </Card.Text>
                            <Button variant="primary" style={{ marginLeft: '3rem' }}>Application</Button>
                            <Button variant="primary" style={{ marginLeft: '3rem' }}>Repository</Button>
                        </Card.Body>
                    </Card>
                </CarouselItem>
            </Carousel>
        </Row>
    )
}

export default Projects;