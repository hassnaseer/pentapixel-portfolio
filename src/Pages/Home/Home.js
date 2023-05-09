import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Crousals from '../../Components/Crousals/Crousals'


import './Home.scss'
import Services from '../../Components/Services/Services'

import Works from '../../Components/Works/Works'



function Home() {
    return (
        <>
            <Navbar />
            <Crousals />

            {/* <Crousals /> */}

            <br />
            <div className="container my-5 text-center">
                <h3 className="">Welcome to PentaPixel – Fastest Growing IT Company</h3>
                <p className="text-justify">PentaPixel Technologies is an IT Software Company founded in Sep 2015 in Pakistan. We are offering multiple services in eb & Mobile applications with
                    HTML, CSS, SCSS, Bootstrap, TailwindCss, WordPress, JavaScript, Reactjs, Api integrations, Redux, React Native, Solidity, Solana, Blockchain, Nodejs, NestJs, AngularJs, VueJs, MongoDB, MYSQL and some other cool libraries. Additional services that we provide include website Designing, API's Development, SEO Services and IOS app development. We have highly experienced web developers who have successfully launched various huge projects and proved their skills in many projects. We are responsible for the working, and we try to keep the best relationship with our customers. As a Leading Software house in Pakistan, We have designed hundreds of Websites, Mobile Apps, Logos and Icons for our clients with a unique research-based process.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <a href="">
                            <img src="https://www.elexoft.com/assets/images/clutch-3.png" class="img-fluid" alt="Responsive image" width={'100px'} />
                        </a>
                    </div>


                    <div className="col-md-3">
                        <img src="https://www.elexoft.com/assets/images/google.png" class="img-fluid" alt="Responsive image" width={'100px'} />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.elexoft.com/assets/images/trustpilot.png" class="img-fluid" alt="Responsive image" width={'100px'} />
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.elexoft.com/assets/images/shopify.png" class="img-fluid" alt="Responsive image" width={'100px'} />
                    </div>
                </div>
            </div>
            <div class="jumbotron jumbotron-fluid my-4">
                <div class="container text-center">
                    <h1 class="display-4"><b> Our Services</b></h1>

                </div>
            </div>
            <div className="container">
                <Services />
            </div>



            <div div class="jumbotron jumbotron-fluid" >
                <div class="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h5>QUALITY PRODUCTS</h5>
                            <p>We believe in Software Quality that is essential to deliver the product on time and on the required quality.</p>
                            <div className="row">
                                <div className="col">
                                    <h5>RELIABILITY</h5>
                                    <p>Failure Free Products are our main target.We always develope the most reliable Products without any failure issue on future.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5>TIMELY WORK</h5>
                            <p>We always plan the Project Development schedule for deploying the Project on time with all completed requirements.</p>
                            <div className="row">
                                <div className="col">
                                    <h5>MAINTAINABLE</h5>
                                    <p>Our Products are fully maintainable for the injection of any new Functionality or Requirement.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img src="https://www.elexoft.com/assets/images/03.jpg" class="img-fluid" alt="Responsive image" width={'600px'} />
                        </div>
                    </div>

                </div>
            </div>
            <div div class="jumbotron jumbotron-fluid" >
                <h3 className='text-center'>We are One Stop Solution Providers</h3>
            </div>
            <div className="container my-4">
                <img src="https://www.elexoft.com/assets/case_study/img/portfolio/elexoft-apps-min.png" class="img-fluid" alt="Responsive image" />
            </div>
            {/* <div className="container">
                <Slider />
            </div> */}
            <div className="container">
                <h3 className="text-center">This is our latest work</h3>
                <p className="text-center">You can review some of the projects that were successfully implemented by Elexoft.</p>
            </div>
            <div className="container my-4">
                <Works />
            </div>



            <Footer />
        </>
    )
}

export default Home
