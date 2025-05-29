import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent'); // Add state for background color

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll handler to add background color transition when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate background color based on scroll position
      const opacity = Math.min(scrollPosition / 200, 1); 
     
      const r = Math.floor(255 - opacity * 255); 
      const g = Math.floor(255 - opacity * 255); 
      const b = Math.floor(255 - opacity * 255); 

      setBgColor(`rgb(${r}, ${g}, ${b})`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all fixed w-full top-0 left-0 z-10`}
      style={{ backgroundColor: bgColor }}
    >
      <nav className='w-full p-6 flex justify-between items-center space-x-4'>
        <Link to='/'>
          <img
            src={assets.logo}
            alt='NYB-Infotechlogo'
            className='w-40 h-13 opacity-90 transition-opacity duration-300'
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-7 items-center '>
          <Link
            to='/'
            className='text-blue-600 hover:text-blue-800 hover:underline cursor-pointer'
          >
            Home
          </Link>
          <div className='relative group'>
            <Link
              to='/about'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              About
            </Link>

            <div className='absolute left-0 w-[100vw] hidden mt-0 space-y-2 bg-gray-100 p-4  group-hover:block group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
              <Link
                to='/about/company'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Our Company
              </Link>
              <Link
                to='/about/team'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Leadership Team
              </Link>
              <Link
                to='/about/partners'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Our Partners
              </Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className='relative group'>
            <Link
              to='/services'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              Services
            </Link>

           
            
            <div className='absolute left-0 w-[100vw] hidden mt-0 space-y-2 bg-gray-100 p-4 rounded-md group-hover:block group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
              <Link
                to='/services/web-development'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Web Development
              </Link>
              <Link
                to='/services/mobile-apps'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Mobile Apps
              </Link>
              <Link
                to='/services/marketing'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Digital Marketing
              </Link>
            </div>
          </div>

          {/* Contact Dropdown */}
          <div className='relative group'>
            <Link
              to='/contact'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              Contact
            </Link>

            {/* Dropdown Menu */}
            <div className='absolute left-0 w-screen hidden mt-2 space-y-2 bg-gray-100 p-4 rounded-md group-hover:block group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
              <Link
                to='/contact/customer-service'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Customer Service
              </Link>
              <Link
                to='/contact/sales'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Sales Inquiries
              </Link>
              <Link
                to='/contact/support'
                className='block text-blue-600 hover:text-blue-800 hover:underline'
              >
                Support
              </Link>
            </div>
          </div>
        </div>
        <div></div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-blue-600 hover:text-blue-800'
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-gray-100 p-4 space-y-4'>
          <Link
            to='/'
            className='text-blue-600 hover:text-blue-800 hover:underline block'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='text-blue-600 hover:text-blue-800 hover:underline block'
          >
            About
          </Link>
          <Link
            to='/services'
            className='text-blue-600 hover:text-blue-800 hover:underline block'
          >
            Services
          </Link>
          <Link
            to='/contact'
            className='text-blue-600 hover:text-blue-800 hover:underline block'
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
