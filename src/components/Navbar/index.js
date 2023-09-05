import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import resume from '../../assets/AmalJanabayevResume.pdf';


function Navigation() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" id="navbar">
            <NavbarBrand href="/">Amal Janabayev</NavbarBrand>
            <Nav className="mr-auto">
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href={resume} download>Resume</Nav.Link>
                <Nav.Link disabled id="fse">Software Engineer</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;