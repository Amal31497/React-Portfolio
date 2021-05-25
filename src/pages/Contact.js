import React from 'react';
import { Form, Col, Button, Card, Row } from 'react-bootstrap'


function Contact() {
    return (
        <Row style={{justifyContent: 'center', height: '34rem', alignContent:'center', backgroundColor:'#e4e4e4'}}>
            <Card style={{ width: '50rem', height: '30rem', padding:'3rem', border:'none', backgroundColor:'#e4e4e4' }}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirst">
                            <Form.Label>First</Form.Label>
                            <Form.Control type="first" placeholder="Enter first name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLast">
                            <Form.Label>Last</Form.Label>
                            <Form.Control type="last" placeholder="Enter last name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="example@gmail.com" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder="(123) 456 - 789" />
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Group controlId="formGridFrom">
                        <Form.Label>Where are you from</Form.Label>
                        <Form.Control placeholder="California!" />
                    </Form.Group>

                    <Form.Group controlId="formGridMessage" style={{height:'8rem'}}>
                        <Form.Label>Leave me a message</Form.Label>
                        <Form.Control placeholder="" style={{height:'6rem'}}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </Row>


    )
}

export default Contact;