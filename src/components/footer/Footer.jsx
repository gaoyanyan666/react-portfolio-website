import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
<div>
    <footer className="small bg-light ">
        <div className="container-fluid py-1 py-sm-5 footer">
            <div className="row ">
                <div className="col-6 col-sm-3 ">
                    <p>LINKS</p>
                    <ul className="list-unstyled ">
                        <li><Link to="/home">Home</Link></li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to ="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-3 mb-2 ">
                    <p>FOLLOW ME</p>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                </div>
                <div className="col-6 col-sm-3 ">
                    <p>CONTACT</p>
                    <abbr title="Telephone ">Tel:</abbr
                ><a href="tel:+919876543210 ">1-(206) 123-4567</a><br />
                <abbr title="Mail ">Email:</abbr
                ><a href="mailto:info@domain.com ">ggaoyanyan@gmail.com</a>
                </div>
                <div className="col-6 col-sm-3 text-center ">
                    <p>MY RESUME</p>
                    <button className="btn btn-social-icon btn-lg " ><i className="fas fa-cloud-download-alt "></i></button>
                </div>
            </div>
            <div className="row text-right ">
                <div className="col-12 col-sm-6 col-md-9 ">
                    <ul className="list-inline ">
                        <li className="list-inline-item ">&copy; 2021 Web Company, Inc.</li>
                        <li className="list-inline-item ">All rights reserved.</li>
                        <li className="list-inline-item ">
                            <a href="#home">Terms of use and privacy policy</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3 ">
                    <div className="dropdown p-0 ">
                        <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                Visit other sites:
                </button>
                        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                            <a href="www.otherwebsite.com" className="dropdown-item ">www.otherwebsite.com</a>
                            <a href="www.newwebsite.com" className="dropdown-item ">www.newwebsite.com</a>
                            <a href="www.oldwebsite.com" className="dropdown-item ">www.oldwebsite.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    )
}
