// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from './assets/logo.png';
import videoPreview from './assets/video-preview.png';
import whiteLogo from './assets/logo-white.png';
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
      {/* Testimonials */}
      <section className='testimonials bg-dark'>
        <div className='container'>
          <h3 className='testimonials-heading text-xl'>
            Dont just take our word for it, see the success stories from
            businesses just like yours.
          </h3>
          <div className='testimonials-grid'>
            <div className='card'>
              <p>
                “Our business has seen a significant increase in productivity
                since we started using the Growth app.”
              </p>
              <p>Katherine Smith</p>
              <p>Capodopera</p>
            </div>
            <div className='card'>
              <p>
                “As a small business owner, its important to have a tool that
                can help me keep track of everything. The Growth app has been a
                lifesaver for me, allowing me to manage my contacts, schedule
                appointments, and track progress all in one place..”
              </p>
              <p>Johnathan Lee</p>
              <p>Red Bolt</p>
            </div>
            <div className='card'>
              <p>
                “The dashboards and reporting feature has provided valuable
                insights into our performance and helped us make data-driven
                decisions. Its a game changer for us.”
              </p>
              <p>David Wilson</p>
              <p>Slide</p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className='pricing'>
        <div className='container-sm'>
          <h3 className='pricing-heading text-xl text-center'>Pricing</h3>
          <p className='pricing-subheading text-md text-center'>
            Start free and scale while you grow. No hidden fees. Unlimited users
            for free.
          </p>
          <div className='pricing-grid'>
            {/* Pricing Card 1 */}
            <div className='card bg-light'>
              <div className='pricing-card-header'>
                <h4 className='pricing-heading text-xl'>Simple</h4>
                <p className='pricing-card-subheading'>
                  Keep track of your contacts, gain valuable insights, analyse
                  live data and performance metrics.
                </p>
                <p className='pricing-card-price'>
                  <span className='text-xl'>Free</span>
                  *No credit card needed
                </p>
              </div>
              <div className='pricing-card-body'>
                <ul>
                  <li>
                    <i className='fas fa-check' /> Real-Time Monitoring
                  </li>
                  <li>
                    <i className='fas fa-check' />
                    Track key performance indicators
                  </li>
                  <li>
                    <i className='fas fa-check' />
                    Schedule appointments
                  </li>
                  <li>
                    <i className='fas fa-check' />
                    Organize, delegate and keep track of tasks
                  </li>
                </ul>
                <a href='#' className='btn btn-primary btn-block'>
                  Get Started
                </a>
              </div>
            </div>
            {/* Pricing Card 2 */}
            <div className='card bg-black'>
              <div className='pricing-card-header'>
                <h4 className='pricing-card-heading text-xl'>Premium</h4>
                <p className='pricing-card-subheading'>
                  Keep track of your contacts, gain valuable insights, analyze
                  live data and performance metrics.
                </p>
                <p className='pricing-card-price'>
                  <span className='text-xl'>$49</span> /month
                </p>
              </div>
              <div className='pricing-card-body'>
                <p>Everything from the free plan plus:</p>
                <ul>
                  <li>
                    <i className='fas fa-check' />
                    Data-driven decisions
                  </li>
                  <li>
                    <i className='fas fa-check' />
                    Data visualization
                  </li>
                  <li>
                    <i className='fas fa-check' />
                    Schedule appointments
                  </li>
                </ul>
                <a href='#' className='btn btn-primary btn-block'>
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <p className='pricing-footer text-center'>
            All prices are in USD and charged per month with applicable taxes
            added at checkout.
          </p>
        </div>
      </section>
      {/* FAQ */}
      <section className='faq bg-light'>
        <div className='container-sm'>
          <h3 className='text-xl text-center'>Frequently Asked Questions</h3>
          <ul className='faq-menu'>
            <li className='active'>All</li>
            <li>Getting Started</li>
            <li>Pricing</li>
          </ul>
          <div className='faq-content'>
            <div className='faq-group'>
              <div className='faq-group-header'>
                <h4 className='text-md'>
                  How does the contact management feature help me keep track of
                  clients and partners?
                </h4>
                <i className='fas fa-minus' />
              </div>
              <div className='faq-group-body open'>
                <p>
                  Keep track of your contacts, gain valuable insights, analyse
                  live data and performance metrics.
                </p>
              </div>
            </div>
            <div className='faq-group'>
              <div className='faq-group-header'>
                <h4 className='text-md'>
                  Can I customize the dashboards and reporting feature to
                  display the metrics that are most important to my business?
                </h4>
                <i className='fas fa-plus' />
              </div>
              <div className='faq-group-body'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  culpa enim blanditiis rem ipsum aliquam, unde iste fugit
                  praesentium eos?
                </p>
              </div>
            </div>
            <div className='faq-group'>
              <div className='faq-group-header'>
                <h4 className='text-md'>
                  How does the task management feature help me delegate tasks to
                  my team and track progress?
                </h4>
                <i className='fas fa-plus' />
              </div>
              <div className='faq-group-body'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Incidunt, a! Quaerat, voluptatum. Animi molestias ex quasi
                  explicabo minima perferendis commodi.
                </p>
              </div>
            </div>
            <div className='faq-group'>
              <div className='faq-group-header'>
                <h4 className='text-md'>
                  Can I collaborate with my team in real-time using all tools?
                </h4>
                <i className='fas fa-plus' />
              </div>
              <div className='faq-group-body'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </p>
              </div>
            </div>
            <div className='faq-group'>
              <div className='faq-group-header'>
                <h4 className='text-md'>
                  Is the app available on all devices?
                </h4>
                <i className='fas fa-plus' />
              </div>
              <div className='faq-group-body'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </p>
              </div>
            </div>
            <div className='faq-group'>
              <div className='faq-group-header'>
                <h4 className='text-md'>
                  How does the app help me stay compliant when working with
                  freelancers and contractors?
                </h4>
                <i className='fas fa-plus' />
              </div>
              <div className='faq-group-body'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className='footer bg-black'>
        <div className='container'>
          <div className='footer-grid'>
            <div>
              <a href='index.html'>
                <img src={whiteLogo} alt='logo' />
              </a>
              <div className='card'>
                <h4>Subscribe to Newsletter</h4>
                <p className='text-sm'>
                  Subscribe now to receive tips on how to take your business to
                  the next level.
                </p>
                <form>
                  <input
                    type='email'
                    id='email'
                    placeholder='Enter your email'
                  />
                  <button type='submit' className='btn btn-primary btn-block'>
                    Subscribe
                  </button>
                </form>
              </div>
              <i className='fab fa-linkedin' />
              <i className='fab fa-twitter' />
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Our Process</a>
                </li>
                <li>
                  <a href='#'>Join Our Team</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href='#'>News</a>
                </li>
                <li>
                  <a href='#'>Research</a>
                </li>
                <li>
                  <a href='#'>Recent Projects</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href='#'>hello@growthapp.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
