import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function PortfolioPage() {
    return (
<>
    <div class="container" id="portfolio">
        <div class="row mt-5">
            <div class="col">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Portfolio</BreadcrumbItem>
            </Breadcrumb>
                        <h2>Portfolio</h2>
                        <hr />
            </div>
        </div>
    </div>
    <div class="container mb-5" id="portfolio">
        <div class="row ">
            <div class="col text-center mt-5 ">
                <h2>PORTFOLIO</h2>
                {/* <!--underline--> */}
                <div class="header-bar mx-auto "></div>
            </div>
        </div>
        <div class="row">
            <div class="card col-md-4">
                <img class="card-img-top" src="img/portfolio/2.png " alt=" "/>
                <div class="card-body">
                    <h5 class="card-title">HTML & CSS</h5>
                    <a class="btn btn-outline-danger" href="portfolio.html">READ MORE</a>
                </div>
            </div>
            <div class="card col-md-4">
                <img class="card-img-top" src="img/portfolio/2.png " alt=" "/>
                <div class="card-body">
                    <h5 class="card-title">BOOTSTRAP</h5>
                    <a class="btn btn-outline-danger" href="portfolio.html">READ MORE</a>
                </div>
            </div>
            <div class="card col-md-4">
                <img class="card-img-top" src="img/portfolio/2.png " alt=" "/>
                <div class="card-body">
                    <h5 class="card-title">JAVASCRIPT</h5>
                    <a class="btn btn-outline-danger" href="portfolio.html">READ MORE</a>
                </div>
            </div>
            <div class="card col-md-4">
                <img class="card-img-top" src="img/portfolio/2.png " alt=" "/>
                <div class="card-body">
                    <h5 class="card-title">REACT</h5>
                    <a class="btn btn-outline-danger" href="portfolio.html">READ MORE</a>
                </div>
            </div>
            <div class="card col-md-4">
                <img class="card-img-top" src="img/portfolio/2.png " alt=" "/>
                <div class="card-body">
                    <h5 class="card-title">GIT</h5>
                    <a class="btn btn-outline-danger" href="portfolio.html">READ MORE</a>
                </div>
            </div>
            <div class="card col-md-4">
                <img class="card-img-top" src="img/portfolio/2.png " alt=" "/>
                <div class="card-body">
                    <h5 class="card-title">NODE.JS</h5>
                    <a class="btn btn-outline-danger" href="portfolio.html">READ MORE</a>
                </div>
            </div>
        </div>
    </div>

</>
    )
}
