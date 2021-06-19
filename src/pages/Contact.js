import React, { useRef, useState } from 'react';
import { Form, Col, Button, Card, Row, Toast } from 'react-bootstrap'
import { GrSend } from 'react-icons/gr';
import { BiError } from 'react-icons/bi'
function Contact() {
    const [submit, setSubmit] = useState();
    const [show, setShow] = useState();
    const firstRef = useRef();
    const lastRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const fromRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstRef.current.value && lastRef.current.value && emailRef.current.value && phoneRef.current.value){
            const submission = {
                name: firstRef.current.value + lastRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                from: fromRef.current.value,
                message: messageRef.current.value
            }
            console.log(submission)
            setSubmit("submitted")
            firstRef.current.value = null;
            lastRef.current.value = null
            phoneRef.current.value = null
            emailRef.current.value = null
            fromRef.current.value = null
            messageRef.current.value = null
        } else {
            setSubmit("missing info")
        }
    }

    return (
        <Row style={{ justifyContent: 'center', height: '34rem', alignContent: 'center', backgroundColor: '#e4e4e4' }}>
            <Card style={{ width: '50rem', height: '30rem', padding: '3rem', border: 'none', backgroundColor: '#e4e4e4' }}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirst">
                            <span>*</span><Form.Label>First</Form.Label> 
                            <Form.Control type="first" placeholder="Enter first name" ref={firstRef} /> 
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLast">
                            <span>*</span><Form.Label>Last</Form.Label> 
                            <Form.Control type="last" placeholder="Enter last name" ref={lastRef} /> 
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <span>*</span><Form.Label>Email</Form.Label> 
                            <Form.Control placeholder="example@gmail.com" ref={emailRef} /> 
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <span>*</span><Form.Label>Phone</Form.Label> 
                            <Form.Control placeholder="(123) 456 - 789" ref={phoneRef} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridFrom">
                        <Form.Label>Where are you from</Form.Label>
                        <Form.Control placeholder="California!" ref={fromRef} />
                    </Form.Group>

                    <Form.Group controlId="formGridMessage" style={{ height: '8rem' }}>
                        <Form.Label>Leave me a message</Form.Label>
                        <Form.Control placeholder="" style={{ height: '6rem' }} ref={messageRef} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Card>
            {submit === "submitted" ? <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide
                style={{
                    position: 'absolute',
                    top: 80,
                    right: 20,
                }}
            >
                <Toast.Header>
                    <GrSend />
                    <strong className="mr-auto">Thanks!</strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>Ill be in touch with you soon!</Toast.Body>
            </Toast> : submit === "missing info" ?
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide
                    style={{
                        position: 'absolute',
                        top: 80,
                        right: 20,
                    }}
                >
                    <Toast.Header>
                        <BiError />
                        <strong className="mr-auto">Somthing is missing</strong>
                        <small>Just Now</small>
                    </Toast.Header>
                    <Toast.Body>Please fill out all the fields</Toast.Body>
                </Toast> : null
            }
        </Row>
    )
}

export default Contact;