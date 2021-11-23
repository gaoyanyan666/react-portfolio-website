import React,{ useState } from 'react';
import {Carousel} from 'react-bootstrap';
import './about.css';
import slide1 from '../../shared/assets/images/slide_1.jpeg';
import slide2 from '../../shared/assets/images/slide2.jpeg';
import slide3 from '../../shared/assets/images/slide3.png';
export default function About() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div className="about container my-5" id="about">
        <div className="row my-5">
            <div className="col text-center mt-5">
                <h2>ABOUT ME</h2>
                <div className="header-bar mx-auto"></div>
            </div>
        </div>
        <div className="row mx-auto my-5">
        {/* <!--carousel indicators--> */}
            <Carousel activeIndex={index} onSelect={handleSelect} id="homeCarousel" className="carousel slide">
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5 className="animated bounceInRight" >Web Development</h5>
            <p className="animated bounceInRight" >
            <button className="btn btn-outline-light" href="#">More Info</button>
            </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5 className="animated zoomIn ">web design</h5>
            <p className="animated zoomIn " >
            <button className="btn btn-outline-light " href="about.html ">More Info</button>
            </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            />
  
            <Carousel.Caption>
            <h5 className="animated zoomIn ">Digital Marketing</h5>
            <p className="animated zoomIn " >
            <button className="btn btn-outline-light " href="about.html ">More Info</button>
            </p>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        <div class="row my-5 pt-5">
            <div class="col text-center ">
                <h4 class="text-sm-center ">Copywriter to web developer</h4>
                <p class="lead d-block text-center ">As a Chinese creative copywriter for 5 years in digital marketing in Shanghai, I have big passion on full stack development in Seattle.
                </p>
            </div>
        </div>
        <div class="row row-content justify-content-around">
            <div class="col-4 col-md-2" id="icon">
                <a href="about.html"><i class="fab fa-html5"></i></a>
            </div>
            <div class="col-4 col-md-2 " id="icon">
                <a href="about.html"><i class="fab fa-css3-alt "></i></a>
            </div>
            <div class="col-4 col-md-2 " id="icon">
                <a href="about.html"><i class="fab fa-js "></i></a>
            </div>
            <div class="col-4 col-md-2 " id="icon">
                <a href="about.html"><i class="fab fa-bootstrap "></i></a>
            </div>
            <div class="col-4 col-md-2 " id="icon">
                <a href="about.html"><i class="fab fa-node "></i></a>
            </div>
            <div class="col-4 col-md-2 " id="icon">
                <a href="about.html"><i class="fab fa-react "></i></a>
            </div>
        </div>
        
    </div>

)

}
