import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function ContactPage() {
    return (
<>
    <div class="container" id="contact">
        <div class="row mt-5">
            <div class="col">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
            </div>
        </div>
    </div>

    <div class="container ">
        <div class="row row-content jumbotron">
            <div class="col-md-10">
                <h2>CONTACT ME</h2>
                <hr />
            </div>
            <div class="col-md-10">
                <form>
                    <div class="form-group row">
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-10">
                            <input type="tel" class="form-control" name="telNum" placeholder="Tel.number" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-10">
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-10">
                            <textarea name="feedback" class="form-control" id="feedback" rows="8" placeholder="Text here"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-10">
                            <button type="submit" class="btn btn-primary form-control">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>  
</>
    )
}
