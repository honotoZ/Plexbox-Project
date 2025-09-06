import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PiButterflyFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FooterSection } from '../utils/constant';


function Footer() {

    return (
        <>
            <div className='footer-container'>
                <div className='plex-image'>
                    <img className='footer-plex-img' src="src/assets/plex-logo.svg" alt="plex-img" />
                </div>
                <div className='footer1'>
                        {
                            FooterSection.map((element)=>(
                                    <>
                                    <div className='company'>
                                        <h5>{element.header}</h5>
                                        <div>{element.subFooter1}</div>
                                        <div>{element.subFooter2}</div>
                                        <div>{element.subFooter3}</div>
                                        <div>{element.subFooter4}</div>
                                        <div>{element.subFooter5}</div>
                                        <div>{element.subFooter6}</div>
                                        <div>{element.subFooter7}</div>
                                        <div>{element.subFooter8}</div>
                                        <div>{element.subFooter9}</div>
                                    </div>
                                    </>
                            ))
                        }
                </div>
            </div>
            <div className='footer2-container'>
                <div className='copyright'>
                    <div>Copyright © 2025 Plex</div>
                    <div className='copyrightSection'>Privacy & Legal</div>
                    <div className='copyrightSection'>Accessibility</div>
                    <div className='copyrightSection'>Manage Cookies</div>
                    <div>Language: <span className='copyrightSection'>English (US)</span></div>
                </div>
                <div className='footer-icons'>
                    <FaInstagram className='socialIcons'/>
                    <FaTiktok className='socialIcons'/>
                    <BsTwitterX className='socialIcons'/>
                    <PiButterflyFill className='socialIcons'/>
                    <FaFacebookF className='socialIcons'/>
                    <FaLinkedinIn className='socialIcons'/>
                    <IoLogoYoutube className='socialIcons'/>
                </div>
            </div>
        </>
    )
}

export default Footer