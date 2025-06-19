import React from 'react'
import sonicImg from '../assets/home-sonic-apple-tv-02-21.webp'
import sonicImg1 from '../assets/home-sonic-3-tile-02-21.webp'
import selectService from '../assets/home-select-services-02-21.webp'

function WatchContent() {

    return (
        <>
            <div className='watch-container'>
                <div className='watch-header'>
                    <h1>Watch</h1>
                    <h5>It's a great day to discover.</h5>
                </div>
                <div className='watch-body'>
                    <p>Select from the best streaming services 
                    (like <span>Hulu</span>, <span>Netflix</span>, Max, and Disney+) to discover 
                    more, search faster, and get curated recommendations—all 
                    without ever leaving Plex.</p>
                    <img className='sonic-image' src={sonicImg} alt="" />
                    <img className='sonic-image1' src={sonicImg1} alt="" />
                    <img className='select-service' src={selectService} alt="" />
                </div>
            </div>
        </>
    )
}

export default WatchContent