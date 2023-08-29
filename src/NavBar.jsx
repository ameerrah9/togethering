import React from 'react';
import TogethingLogo from './assets/TogetheringLogo.png';

const NavBar = () => {
  return (
    <>
      <nav className='' id=''>
        <a className='' href='#page-top'>
          <span className='d-block d-lg-none'>Togethering</span>
          <span className='d-none d-lg-block'>
            <img
              className='img-fluid img-profile mx-auto mb-2'
              src={TogethingLogo}
              alt=''
            />
          </span>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#about'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#vision'>
                Our Vision
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#offerings'>
                What We Offer
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#mission'>
                Our Mission:
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#contact'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
