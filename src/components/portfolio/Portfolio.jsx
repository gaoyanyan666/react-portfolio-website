import React from 'react';
import './portfolio.css';
import portfolio1 from '../../shared/assets/images/1.png';
import portfolio2 from '../../shared/assets/images/2.png';
import portfolio3 from '../../shared/assets/images/3.png';
import portfolio4 from '../../shared/assets/images/4.png';
import portfolio5 from '../../shared/assets/images/5.png';
import portfolio6 from '../../shared/assets/images/6.png';



export default function Portfolio() {
    return (
        
    <div className="container my-5" id="portfolio">
        <div className="row my-5">
            <div className="col text-center mt-5 ">
                <h2>PORTFOLIO</h2>
                <div className="header-bar mx-auto "></div>
            </div>
        </div>
        <div className="row row-content no-padding ">
            <div className="col-md-4 text-center">
                <div className="portfolio ">
                    <a href="#portfolio" target="_blank">
                        <img src={portfolio1} alt=" "/>
                    </a>
                    <div className="description ">
                        <h5>SURVEY</h5>
                        <p>HTML & CSS</p>
                        <a className="btn btn-outline-danger " href="portfolio.html ">READ MORE</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center ">
                <div className="portfolio">
                    <a href="#portfolio" target="_blank">
                        <img src={portfolio2} alt=" "/>
                    </a>
                    <div className="description ">
                        <h5>HOTEL</h5>
                        <p>BOOTSTRAP</p>
                        <a className="btn btn-outline-danger " href="portfolio.html ">READ MORE</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center ">
                <div className="portfolio ">
                    <a href="#portfolio" target="_blank ">
                        <img src={portfolio3} alt=" "/>
                    </a>
                    <div className="description">
                        <h5>SUPERMARKET</h5>
                        <p>HTML & CSS</p>
                        <a className="btn btn-outline-danger " href="portfolio.html ">READ MORE</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center ">
                <div className="portfolio ">
                    <a href="#portfolio" target="_blank ">
                        <img src={portfolio4} alt=" "/>
                    </a>
                    <div className="description ">
                        <h5>EXAMPLE</h5>
                        <p>NODE.JS / GIT</p>
                        <a className="btn btn-outline-danger " href="portfolio.html ">READ MORE</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center ">
                <div className="portfolio ">
                    <a href="#portfolio" target="_blank ">
                        <img src={portfolio5} alt=" "/>
                    </a>
                    <div className="description ">
                        <h5>OTHER</h5>
                        <p>REACT</p>
                        <a className="btn btn-outline-danger " href="portfolio.html ">READ MORE</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center ">
                <div className="portfolio ">
                    <a href="#portfolio" target="_blank ">
                        <img src={portfolio6} alt=" "/>
                    </a>
                    <div className="description ">
                        <h5>SOMETHING ELSE</h5>
                        <p>HTML & JS</p>
                        <a className="btn btn-outline-danger " href="portfolio.html ">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}
