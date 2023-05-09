import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Cards from '../../Components/Cards1/Cards'
import Services from '../../Components/Services/Services'
function Blog() {
    return (
        <>
            <div className="">
                <Navbar />
            </div>
            <div className="">
                <div class="jumbotron jumbotron-fluid my-2">
                    <div class="container my-2">
                        <h1 class="display-4 my-2">Our Services</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <Services />
            </div>








            <Footer />
        </>
    )
}

export default Blog
