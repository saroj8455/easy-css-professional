// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import bookLogo from './assets/book_logo.png';
function App() {
  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>
            <a href='index.html'>
              <img src={bookLogo} height={100} width={150} alt='logo' />
            </a>
          </div>

          <div className='main-menu'>
            <ul>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a className='btn' href='#'>
                  <i className='fas fa-user'></i> Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Books banner */}
      <section className='hero'>
        <div className='container'>
          <div className='hero-content'>
            <h1 className='hero-heading  text-7xl'>
              Make CTAs visually prominent to drive user engagement.
            </h1>
            <p className='hero-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              laborum? Asperiores quo eos, odit laboriosam ut, qui quidem,
              architecto nihil quia modi dolor amet quos tempora ipsa id non
              iste!
            </p>
            <div className='hero-buttons flex gap-2 align-items-center '>
              <a href='#' className='btn btn-primary'>
                Get Started
              </a>
              <a href='#' className='btn'>
                <i className='fas fa-laptop' /> Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
