import React from 'react'
import './About.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'


function About() {
    return (
        <>
            <Navbar />
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 my-2">About Us</h1>
                </div>
            </div>
            <div className="container">
                <h3 className="text-center">OUR COMPANY</h3>
                <p className="text-center">Pentapixel is thought to be one of the well-known companies offering IT services. The professional company is tightly organized to provide more readily usable outcomes and solutions for application in a variety of sectors. Our goal is to play a significant role in the technological revolution by developing platforms and products that will enable us to collaborate with businesses that are working to find solutions to the world's most pressing issues. Our vision is to be a key part of the technological revolution by creating products and platforms where we can partner with highly skilled and trained individuals with companies who are looking to solve the world’s biggest problems.</p>
                <h3 className="text-center">MISSION & VISION</h3>
                <p className="text-center">Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation. Whether it is a consumer-oriented app or a transformative enterprise-class solution, the company leads the process from ideation and concept to delivery, and provides ongoing support through its IS360 framework.</p>
            </div>
            {/* <div class="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 my-5">
                            <div class="inner text-center my-5">

                                <h2>About</h2>
                                <a class="rn-button-style--2 my-5" href="/contact">
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid image1 my-5" src="https://trydo.rainbowit.net/assets/images/about/about-3.jpg" alt="Responsive image" />

                    </div>
                    <div className="col-lg-6 my-5">
                        <h1 class="heading h1 my-5" ><b> About</b></h1>
                        <p className="paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.</p>
                        <div className="row">
                            <div className="col-6 ">
                                <h1 className="mx-0">Who we are</h1>
                                <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                            <div className="col-6">
                                <h1 className="mx-3">Who we are</h1>
                                <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <p className="h1 text-center"> Our Fun Facts</p>
                <div className="row">
                    <div className="col-md-4">
                        <p className="heading text-danger text-center"><b> 199</b> <sup>+</sup></p>
                        <p className="text-center">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="heading text-danger text-center"><b> 575</b> <sup >+</sup></p>
                        <p className="text-center">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="heading text-danger text-center"><b> 69</b> <sup>+</sup></p>
                        <p className="text-center">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    )
}

export default About
