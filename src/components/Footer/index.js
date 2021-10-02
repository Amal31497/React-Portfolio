import React from 'react';
import { Row } from 'react-bootstrap';
import { IoLogoInstagram } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";

function Footer() {

    return (
        <footer className="mt-auto text-black-100 footer" id="footer">
            <div className="linksFooter">
                <div className="link" ><a target="_blank" rel="noreferrer" href="https://www.instagram.com/amamamdj/"><IoLogoInstagram /></a></div>
                <div className="link" ><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amaljanabayev/"><GrLinkedin /></a></div>
                <div className="link" ><a target="_blank" rel="noreferrer" href="https://github.com/Amal31497"><IoLogoGithub /></a></div>
            </div>
            <Row id="AJ">
                © 2021 Amal Janabayev
            </Row>
        </footer>
    )
}

export default Footer;