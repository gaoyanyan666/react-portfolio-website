import React from 'react';
import './home.css';
import background from '../../shared/assets/images/woman.jpg';

const backgroundImage = {
    backgroundImage:`url(${background})`
  };
export default function Home() {
    return (
        <div className="home" id="home">
        <div id="home" style={backgroundImage}>
        <h1 className="text-white py-4">HELLO</h1>
        <h1 className="text-center text-white ">你好!</h1>
        {/* <!-- horizontal line --> */}
        <div className="border-top border-success w-25 mx-auto my-3 "></div>
        <p>WELCOME TO MY WEBSITE</p>
        <a href="#about" className="btn btn-outline-light btn-lg ">Start</a>
    </div>
        </div>
    )
}
