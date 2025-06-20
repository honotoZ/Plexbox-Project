import React from 'react'
import { ImAndroid } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import { SiRoku } from "react-icons/si";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import googlePlayBadge from '../assets/Google_Play_Store_badge_EN.svg.webp';
import appStoreBadge from '../assets/Download_on_the_App_Store_Badge.svg.webp';

function MainContent() {

    return (
        <>
            <div className='mainbody-container'>
                <div className='appstore'>
                    <div className='appstore1'>
                        <div className='appstoreA'>
                            <ImAndroid className='android'/>
                            <span>App Store</span>
                        </div>
                        <div className='appstoreB'>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStarHalfAlt className='halfstar'/>
                        </div>
                        <div className='appstoreC'>
                            <span>4.4/5</span>
                        </div>
                        <div className='appstoreD'>
                            <span>329,603 ratings</span>
                        </div>
                    </div>
                    <div className='appstore2'>
                        <div className='appstoreAA'>
                            <FaApple className='apple'/>
                            <span>App Store</span>
                        </div>
                        <div className='appstoreBB'>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStarHalfAlt className='halfstar'/>
                        </div>
                        <div className='appstoreCC'>
                            <span>4.7/5</span>
                        </div>
                        <div className='appstoreDD'>
                            <span>105,183 ratings</span>
                        </div>
                    </div>
                    <div className='appstore3'>
                        <div className='appstoreAAA'>
                            <SiRoku className='roku'/>
                            <span>App Store</span>
                        </div>
                        <div className='appstoreBBB'>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStar className='star'/>
                            <FaStarHalfAlt className='halfstar'/>
                        </div>
                        <div className='appstoreCCC'>
                            <span>4/5</span>
                        </div>
                        <div className='appstoreDDD'>
                            <span>143,174 ratings</span>
                        </div>
                    </div>
                    <div className='appstore4'>
                        <div className='appstoreAAAA'>
                            <span>Download Now</span>
                        </div>
                        <img src={googlePlayBadge} alt="google play" />
                        <img src={appStoreBadge} alt="apple store" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainContent