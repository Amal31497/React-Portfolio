import React,{ useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Particles } from "react-particles-js"
import MMGMA from '../assets/mobileAppGif.gif';
import TB from '../assets/techBlog.png';
import YNC from '../assets/phoneOutline.png';
import GBS from '../assets/googleBooksGif.gif'
import MMG from '../assets/myMiniGallery.png'

import LapropOutline from "../assets/laptop-ountline.png";
import VizualizerGif from "../assets/vizualizerGif.gif";
import MyMiniGalleryGif from "../assets/myMiniGalleryGif.gif";
import CMSGif from "../assets/CMSgif.gif";

import "./Projects.css"
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpo, SiGoogle, SiMysql, SiJavascript } from 'react-icons/si';

function Projects() {
    const [hoverLaptop, setHoverLaptop] = useState("");


    return(
        <div className="projectsWrapper">

            <div className={`row visualizer`}>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 left">
                    <h4 className="leftElement leftTitle">Construction Management System</h4>
                    <p className="leftElement">Platform built for enterprises that specialize in construction projects and resource management. Developed in 1 week with 3 other developers. Came up with microservice infrastructure and implemented integration and unit testing.</p>
                    <p className="leftElement">Built with Java Spring Boot, React with implementation of Microservices</p>
                    <div className="links">
                        <div className="sourceCode">
                            <a className="sourceCodeLink" href="https://github.com/CodingErik/constructionManagementSystem" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 right">
                    <a className="wrapperLink" href="https://github.com/CodingErik/constructionManagementSystem" target="_blank">
                        <img src={LapropOutline} className={`laptopOutline`} />
                        <img src={CMSGif} className={`visualizerGif`} />
                    </a>
                </div>

            </div>

            <div className={`row visualizer`}>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 left">
                    <h4 className="leftElement leftTitle">Pathfinding Visualizer</h4>
                    <p className="leftElement">This project I created out of my curiosity and interest in pathfinding algotithms and dynamic programming. The visualizer allows to see real life implementation of pathfinding algorithms and the way they work in real time.</p>
                    <p className="leftElement">Built with React, Bootstrap, and CSS Animations(Keyframes)</p>
                    <div className="links">
                        <div className="liveLinkOuterLayer">
                            <a className="liveLinkLink" href="https://pathfinding-visualizer-amal-j.herokuapp.com/" target="_blank">Live Link</a>
                        </div>
                        <div className="sourceCode">
                            <a className="sourceCodeLink" href="https://github.com/Amal31497/pathfinding-visualizer" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 right">
                    <a className="wrapperLink" href="https://pathfinding-visualizer-amal-j.herokuapp.com/" target="_blank">
                        <img src={LapropOutline} className={`laptopOutline`} />
                        <img src={VizualizerGif} className={`visualizerGif`} />
                    </a>
                </div>
            </div>

            <div className="row myMiniGallery">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 left">
                    <h4 className="leftElement leftTitle">My Mini Gallery</h4>
                    <p className="leftElement">Full Stack Web Application built for Artists to share art and professional experience in various disciplines like photography, digital art and many more!</p>
                    <p className="leftElement">Built with React, MongoDB, Node.js, Express.js</p>
                    <div className="links">
                        <div className="liveLinkOuterLayer">
                            <a className="liveLinkLink" href="https://my-mini-gallery.herokuapp.com/" target="_blank">Live Link</a>
                        </div>
                        <div className="sourceCode">
                            <a className="sourceCodeLink" href="https://github.com/Amal31497/My-Mini-Gallery" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 right">
                    <a className="wrapperLink" href="https://my-mini-gallery.herokuapp.com/" target="_blank">
                        <img src={LapropOutline} className="laptopOutline" />
                        <img src={MyMiniGalleryGif} className="visualizerGif" />
                    </a>
                </div>
            </div>

            <div className={`row googleBooks`}>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 left">
                    <h4 className="leftElement leftTitle">Google Books</h4>
                    <p className="leftElement">With help of Google Books API this application allows user to interact with a large database of books to find, save, and delete from their favorites.</p>
                    <p className="leftElement">Built with React, MongoDB, Node.js, Express.js</p>
                    <div className="links">
                        <div className="liveLinkOuterLayer">
                            <a className="liveLinkLink" href="https://guarded-castle-60005.herokuapp.com/" target="_blank">Live Link</a>
                        </div>
                        <div className="sourceCode">
                            <a className="sourceCodeLink" href="https://github.com/Amal31497/Google-Books-Search" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 right">
                    <a className="wrapperLink" href="https://guarded-castle-60005.herokuapp.com/" target="_blank">
                        <img src={LapropOutline} className="laptopOutline" />
                        <img src={GBS} className="visualizerGif" />
                    </a>
                </div>
            </div>

        </div>

    )
}

export default Projects;