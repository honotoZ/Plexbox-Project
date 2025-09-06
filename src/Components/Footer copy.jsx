import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PiButterflyFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";


function Footer() {

    return (
        <>
            <div className='footer-container'>
                <div className='plex-image'>
                    <img className='footer-plex-img' src="src/assets/plex-logo.svg" alt="plex-img" />
                </div>
                <div className='footer1'>
                    <div className='company'>
                        <h5>Company</h5>
                        <div>About</div>
                        <div>Careers</div>
                        <div>Our Culture</div>
                        <div>Giving</div>
                        <div>Partners</div>
                        <div>News</div>
                        <div>Plex Gear</div>
                        <div>The Plex Blog</div>
                        <div>Advertise with Us</div>
                    </div>
                    <div className='premium'>
                        <h5>Go Premium</h5>
                        <div>Plans</div>
                        <div>Plexamp</div>
                        <div>Plex Labs</div>
                        <div>Get Perks</div>
                    </div>
                    <div className='downloads'>
                        <h5>Downloads</h5>
                        <div>Plex Media Server</div>
                        <div>Plex</div>
                        <div>Plexamp</div>
                        <div>Plex Photos</div>
                        <div>Plex Dash</div>
                        <div>Where to Watch</div>
                    </div>
                    <div className='support'>
                        <h5>Support</h5>
                        <div>Finding Help</div>
                        <div>Support Library</div>
                        <div>Community Forums</div>
                        <div>Community Guidelnes</div>
                        <div>Billing Questions</div>
                        <div>Status</div>
                        <div>Bug Bounty</div>
                        <div>CordCutter</div>
                        <div>Get in Touch</div>
                    </div>
                    <div className='watch-free'>
                        <h5>Watch Free</h5>
                        <div>Discover on Plex</div>
                        <div>TV Channel Finder</div>
                        <div>What to Watch</div>
                        <div>What to Watch on Netflix</div>
                        <div>What to Watch on Hulu</div>
                        <div>A24 Movies</div>
                        <div>Valentine's Day Movies</div>
                        <div>Christmas Movies</div>
                    </div>
                </div>
            </div>
            <div className='footer2-container'>
                <div className='copyright'>
                    <div>Copyright © 2025 Plex</div>
                    <div className='privacy'>Privacy & Legal</div>
                    <div className='accessibility'>Accessibility</div>
                    <div className='manage-cookies'>Manage Cookies</div>
                    <div>Language: <span>English (US)</span></div>
                </div>
                <div className='footer-icons'>
                    <FaInstagram className='instagram' />
                    <FaTiktok className='tiktok'/>
                    <BsTwitterX className='x'/>
                    <PiButterflyFill className='butterfly'/>
                    <FaFacebookF className='facebook'/>
                    <FaLinkedinIn className='linkedin'/>
                    <IoLogoYoutube className='youtube'/>
                </div>
            </div>
        </>
    )
}

export default Footer