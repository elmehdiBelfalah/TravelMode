import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventures
                </p>
                <p className="footer-subscription-text">
                    You can unsubsribe at any time 
                </p>
                <div className="footer-input-areas">
                    <form>
                        <input type="email" name='email' placeholder='YourEmail@xxx.xx' className='footer-input' />
                        <Button buttonStyle='btn-outline'>Subscribe Now</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    {/* <div className="footer-link-items">
                       <h2>
                           About Us
                       </h2>
                       <Link to='/Login'>How it works</Link>
                       <Link to='/Login'>Careers</Link>
                       <Link to='/Login'>Investors</Link>
                       <Link to='/Login'>Terms of services</Link>
                    </div> */}
                </div>
            </div>
            <section className="social-media">
                <div className="social-media">
                    <div className="footer-logo">
                        <Link to='/'className='social-logo'>
                        TravelMode<i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVM © 2022</small>
                    <div className="social-icons">
                        <Link className='social-icon-link'
                              to='/'
                              target='_blank'
                              aria-label='Facebook'
                        ><i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className='social-icon-link'
                              to='/'
                              target='_blank'
                              aria-label='Instagram'
                        ><i className="fab fa-instagram"></i>
                        </Link>
                        <Link className='social-icon-link'
                              to='/'
                              target='_blank'
                              aria-label='Twitter'
                        ><i className="fab fa-twitter"></i>
                        </Link>
                        <Link className='social-icon-link'
                              to='/'
                              target='_blank'
                              aria-label='Youtube'
                        ><i className="fab fa-youtube"></i>
                        </Link>
                        <Link className='social-icon-link'
                              to='/'
                              target='_blank'
                              aria-label='  Linkedin'
                        ><i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
