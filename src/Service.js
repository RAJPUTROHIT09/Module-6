import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Service() {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className='navbar navbar-expand-sm navbar-danger bg-danger'>
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
                            {/* About Us Link */}
                            <li className='nav-item'>
                                <Link to='/aboutus' className='nav-link'>About us</Link>
                            </li>
                            {/* Contact Link */}
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-link'>Contact</Link>
                            </li>
                            {/* Service Link (Active) */}
                            <li className='nav-item'>
                                <Link to='/service' className='nav-link active'>Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Main Section */}
            <section className='container'>
                <h2 className='text-center m-5'>Service page</h2>
                {/* Service Navigation */}
                <ul className='nav nav-pills'>
                    {/* Service 1 Link */}
                    <li className='nav-item'>
                        <Link to='/service/service1' className='nav-link'>Service 1</Link>
                    </li>
                    {/* Service 2 Link */}
                    <li className='nav-item'>
                        <Link to='/service/service2' className='nav-link'>Service 2</Link>
                    </li>
                </ul>
                {/* Outlet for nested routes */}
                <Outlet />
            </section>
        </div>
    )
}

export default Service;
