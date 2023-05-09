import React from 'react'
import { CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import img from '../../Images/Web Development.png'
import img1 from '../../Images/Search Engine.png'
import img2 from '../../Images/Mobile App.png'
function Crousals() {
  return (
    <>
      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <div class="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
            <div class="container my-5">
              <div class="row">
                <div class="col-lg-6 my-5">
                  <div class="inner my-5">
                    <span></span>
                    <h2 className="text-dark my-5">Web App Development</h2>
                    <h3>Responsive & Reliable</h3>
                    <p> Our Major concern is the Reliability of Website</p>
                    {/* <a class="rn-button-style--2 my-5" href="/contact">
                      <span>Contact Us</span>
                    </a> */}

                  </div>
                </div>
                <div class="col-lg-6 my-5">
                  <img src={img} class="img-fluid my-4" alt="Responsive image" width={'450px'} />
                </div>
              </div>
            </div>
          </div>

        </CCarouselItem>

        <CCarouselItem>
          <div class="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
            <div class="container my-5">
              <div class="row">
                <div class="col-lg-6 my-5">
                  <div class="inner text-left my-5">

                    <h2 className="text-dark my-5">Mobiles App Development</h2>
                    <h3 className="my-5">We Build Awesome Apps</h3>
                    <p>We know how to build products that can scale to your business' needs,
                    </p>

                  </div>
                </div>
                <div className="col-lg-6 my-5">
                  <img src={img2} class="img-fluid my-5" alt="Responsive image" width={'450px'} />
                </div>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div class="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
            <div class="container my-5">
              <div class="row">
                <div class="col-lg-6 my-5">
                  <div class="inner text-left my-5">

                    <h2 className="text-dark my-5">Search Engine optimization</h2>
                    <h3 className="my-5">We Build Awesome Apps</h3>
                    <p>We start the SEO process with a full website audit and recommendations report,
                    </p><p> Our team will review your key metrics, perform keyword research, analyze your competitors,</p>

                  </div>
                </div>
                <div className="col-lg-6 my-5 text-center">
                  <img src={img1} class="img-fluid my-5" alt="Responsive image" width={'450px'} />
                </div>
              </div>
            </div>
          </div>
        </CCarouselItem>
      </CCarousel>
    </>
  )
}

export default Crousals


