import React, { useEffect, useState } from 'react';

import LapropOutline from "../assets/laptop-ountline.png";
import VizualizerGif from "../assets/vizualizerGif.gif";
import VendingPortfolioGif from "../assets/vendingPorfolioGif.gif";
import CMSGif from "../assets/CMSgif.gif";

import "./Projects.css"

function Projects() {
    const [hoverLaptop, setHoverLaptop] = useState("");


    return (
        <div className="projectsWrapper">
            <div className="row myMiniGallery">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 left">
                    <h4 className="leftElement leftTitle">Vending Service Portfolio</h4>
                    <p className="leftElement">A portfolio website for a Vending Machine Business built for lead generation. 300+ visits per month on average</p>
                    <p className="leftElement">Built with React, MySQL, AWS Elastic Beanstalk, CSS Animations, Java Spring Boot, Google Ads</p>
                    <div className="links">
                        <div className="liveLinkOuterLayer">
                            <a className="liveLinkLink" href="https://www.snackstr.com/" target="_blank">Live Link</a>
                        </div>
                        <div className="sourceCode">
                            <a className="sourceCodeLink" href="https://github.com/Amal31497/vending-portfolio-ui" target="_blank">UI</a>
                        </div>
                        <div className="sourceCode">
                            <a className="sourceCodeLink" href="https://github.com/Amal31497/vending-portfolio" target="_blank">Backend</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 right">
                    <a className="wrapperLink" href="https://www.snackstr.com/" target="_blank">
                        <img src={LapropOutline} className="laptopOutline" />
                        <img src={VendingPortfolioGif} className="visualizerGif" />
                    </a>
                </div>
            </div>
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
                            <a className="liveLinkLink" href="https://master.d3v2sfn73mhrvz.amplifyapp.com/" target="_blank">Live Link</a>
                        </div>
                        <div className="sourceCode">
                            <a className="sourceCodeLink" href="https://github.com/Amal31497/pathfinding-visualizer" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 right">
                    <a className="wrapperLink" href="https://master.d3v2sfn73mhrvz.amplifyapp.com/" target="_blank">
                        <img src={LapropOutline} className={`laptopOutline`} />
                        <img src={VizualizerGif} className={`visualizerGif`} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;