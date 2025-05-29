import React from 'react';
import { assets } from '../assets/assets'; 
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer
      className='flex p-6 justify-between space-x-4 text-white'
      style={{ backgroundImage: `url(${assets.footerBg})` }}
    >
      {/* <div className='absolute inset-0 bg-black opacity-20 z-0'></div> */}

      <div className='flex flex-col items-start space-y-4'>
        <div className='p-2 w-40 h-20'>
          <img src={assets.logo} />
        </div>
        <div>
          <p>NYB infotech is a leading software company</p>
        </div>
      </div>

      <div>
        <h3>Quick Links</h3>
      </div>
      <div>
        <h2 className=''>About Us</h2>
        <nav className='flex flex-col space-y-1'>
          <Link to='/about' className='hover:text-orange-800 hover:underline'>
            Our Company
          </Link>
          <Link to='/about' className='hover:text-orange-800 hover:underline'>
            Our Company
          </Link>
        </nav>

        <h4></h4>
        <h4>Organization Chart</h4>
        <h4>Leadership Team</h4>
        <h4>Our Partners</h4>
        <h4>Our Clients</h4>
        <h4>Events</h4>
        <h4>Blogs</h4>
      </div>
      <div>
        <h4>Get In Touch</h4>

        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <FaWhatsapp className='text-orange-500 text-xl' />
            <a
              href='https://wa.me/9849105580'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white-600 hover:text-orange-800 hover:underline'
            >
              98491-05580
            </a>
          </div>

          <div className='flex items-center gap-2'>
            <FaEnvelope className='text-orange-500 text-xl' />
            <a
              href='mailto:Navayuvabahratinfotech@gmail.com'
              className='text-white-600 hover:text-orange-800 hover:underline'
            >
              Navayuvabahratinfotech@gmail.com
            </a>
          </div>

          <a
            href='https://www.google.com/maps?q=Innov8+7th+Floor+Pranava+Business+Park+Kothguda+Hyderabad+500084'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white-700 hover:underline hover:text-orange-800'
          >
            <div className='flex items-start gap-2'>
              <FaMapMarkerAlt className='text-orange-600 text-xl mt-1' />
              <div>
                Innov8, 7th Floor Pranava Business Park,
                <br />
                Kothguda, Beside Harsha Toyota Showroom,
                <br />
                Hyderabad: 500084
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
