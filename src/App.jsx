// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from './assets/logo.png';
import videoPreview from './assets/video-preview.png';
function App() {
  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>
            <a href='index.html'>
              <img src={logo} alt='logo' />
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
      {/* Hero */}
      <section className='hero'>
        <div className='container'>
          <div className='hero-content'>
            <h1 className='hero-heading text-xxl'>
              A powerful solution to grow your startup. Fast!
            </h1>
            <p className='hero-text'>
              Organize, collaborate, and track progress seamlessly with our
              one-stop-shop startup growth tool.
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
      {/* Video Section */}
      <section className='video bg-black'>
        <div className='container-sm'>
          <h2 className='video-heading text-xl text-center'>
            See how it works and get started in less than 2 minutes
          </h2>
          <div className='video-content'>
            <a href='#'>
              <img src={videoPreview} alt='video' className='video-preview' />
            </a>
            <a href='#' className='btn btn-primary'>
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
