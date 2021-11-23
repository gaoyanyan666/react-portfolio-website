import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


export default function AboutPage() {
    return (
<>
    <div className="container" id="about">
        <div className="row mt-4">
            <div className="col mt-4">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About</BreadcrumbItem>
            </Breadcrumb>
                        <h2>About Us</h2>
                        <hr />
            </div>
        </div>
        <div className="row row-content">
            <div className="col-lg-6 my-auto">
                <div>
                    <h1>ABOUT</h1>
                    <h6 className="lead my-3">I'm a part-time creative copywriter and looking for a job as either a web developer or copywriter.</h6>
                    <p><small>I enjoy coding and writing, my fingers have muscle memory by touching keyboards. When I'm not in front of screen, you'll find me cooking, gardening or playing with my son.</small></p>
                </div>
            </div>

            <div className="col-lg-6 card-box">
                <div className="card-box-front">
                    <img src="img/profile.jpg" className="" alt=''/>
                </div>
                <div className="card-box-back">
                    <div className="card-box-back-in">
                        <h4>ANNA GAO</h4>
                        <div className="social_links">
                            <a href="#about"><i className="fab fa-facebook-square"></i></a>
                            <a href="#about"><i className="fab fa-linkedin"></i></a>
                            <a href="#about"><i className="fab fa-instagram-square"></i></a>
                            <a href="#about"><i className="fab fa-youtube-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--skill bar with effect--> */}
    <div className="container my-5">
        <div className="row ml-4">
            <div className="col my-5">
                <h1>SKILLS</h1>
            </div>
        </div>
        <div className="row row-content">
            <div className="col-lg-10">
                <div className="skill_row">
                    <div className="skill_view">
                        <p className="text-center pt-1">HTML</p>
                        <span className="skill_value">90%</span>
                    </div>
                </div>
                <br/>
                <div className="skill_row">
                    <div className="skill_view">
                        <p className="text-center pt-1">CSS</p>
                        <span className="skill_value">80%</span>
                    </div>
                </div>
                <br/>
                <div className="skill_row">
                    <div className="skill_view">
                        <p className="text-center pt-1">JavaScript</p>
                        <span className="skill_value">60%</span>
                    </div>
                </div>
                <br/>
                <div className="skill_row">
                    <div className="skill_view">
                        <p className="text-center pt-1">Bootstrap</p>
                        <span className="skill_value">80%</span>
                    </div>
                </div>
                <br/>
                <div className="skill_row">
                    <div className="skill_view">
                        <p className="text-center pt-1">React</p>
                        <span className="skill_value">70%</span>
                    </div>
                </div>
                <br/>
                <div className="skill_row">
                    <div className="skill_view">
                        <p className="text-center pt-1">Node.js</p>
                        <span className="skill_value">30%</span>
                    </div>
                </div>
                <br/>
                <div className="skill_row">
                    <div className="skill_view">
                        <p className="text-center pt-1">Figma</p>
                        <span className="skill_value">20%</span>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    </div>
    
</>
    )
}
