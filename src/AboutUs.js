import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className='navbar navbar-expand-sm navbar-success bg-success'>
                <div className='container-fluid'>
                    {/* Logo Link */}
                    <Link to='/' className='navbar-brand mx-5'><h1>Logo</h1></Link>
                    {/* Navigation Links */}
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav me-auto'>
                            {/* Home Link */}
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            {/* About Us Link (Active) */}
                            <li className='nav-item'>
                                <Link to="/aboutus" className='nav-link active'>About us</Link>
                            </li>
                            {/* Contact Link */}
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-link'>Contact</Link>
                            </li>
                            {/* Service Link */}
                            <li className='nav-item'>
                                <Link to='/service' className='nav-link'>Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Main Section */}
            <section className='container'>
                <h2 className='text-center m-5'>About us page</h2>
            </section>
        </div>
    )
}

export default AboutUs;
