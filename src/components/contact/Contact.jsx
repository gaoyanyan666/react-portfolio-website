import React from 'react';
import './contact.css';
import contactImg from '../../shared/assets/images/code.jpg';

export default function Contact() {
    return (
    <>
    <div className="contact container my-5 justify-content-center " id="contact">
        <div className="row my-5">
            <div className="col text-center mt-5">
                <h2>CONTACT</h2>
                <div className="header-bar mx-auto" ></div>
            </div>
        </div>
        <div className="row row-content w-100 py-4 jumbotron">
            <div className="col-lg-4 mb-4 my-lg-auto">
                <h2 className="text-dark font-weight-bold mb-3">WHAT ARE YOU EXPECTED</h2>
                <p className="lead mb-4">Looking for quality web development and Chinese digital creative copywriter</p>
                <button href="contact.html" target="_blank" className="btn btn-outline-dark btn-lg m-2 ">CONTACT ME NOW</button>
                <button  target="_blank" className="btn btn-outline-dark btn-lg m-2 ">DOWNLOAD RESUME</button>
            </div>
            <div className="col-lg-8 ">
                <img src={contactImg} alt=" " className="d-block w-100 "/>
            </div>
        </div>
    </div>
</>
    )
}
