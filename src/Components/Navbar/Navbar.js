import React from 'react'
import './Navbar.css'
import img from '../../Images/PentaPixel-Logo-removebg-preview.png'
function Navbar() {
    return (
        <>
            <header>
                <h1 class="logo mx-5"> <a href="/Home"> <img src={img} alt="..." class="img-thumbnail mx-0 my-2" width={'40px'} /></a>  </h1>
                <input type="checkbox" id="nav-toggle" class="nav-toggle" />
                <nav>
                    <ul>
                        <li><a className="text-dark" href="/Home"><b> Home </b></a></li>
                        <li><a className="text-dark" href="/About"><b> About</b></a></li>
                        <li><a className="text-dark" href="/Service"><b> Service</b></a></li>
                        <li><a className="text-dark" href="/Contact"><b> Contact</b></a></li>

                        <label for="nav-toggle" class="nav-toggle-label">

                        </label>
                    </ul>
                    <h1 className="mx-5">12345</h1>
                </nav>

            </header>





        </>
    )
}

export default Navbar


