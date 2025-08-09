import React from 'react'
import img1 from '../assets/M-profile-screen.webp'
import img2 from '../assets/M-home-watchlist-02-21.webp'
import img3 from '../assets/M-home-watched-02-21.webp'
import img4 from '../assets/M-home-share-02-21.webp'
import img5 from '../assets/M-home-rate-02-21.webp'
function ExploreContent() {

    return (
        <>
            <div className='explore-container'>
                <div className='explore-header'>Explore</div>
                <div className='explore-body'>
                    <div className='header-section'>
                        <h5>Find your friends on Plex.</h5>
                    </div>
                    <div className='end-section'>
                        <p>What if you could find what to watch 
                        next based on ratings and activity from 
                        people you know in real life? With Discover 
                        Together, you can. Now you can search for and 
                        add friends, share, comment, and more.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='explore-end'>
                    <div className='img1-container'>
                        <img className='img1' src={img1} alt="main-image" />
                    </div>
                    <img className='img2' src={img2} alt="" />
                    <img className='img3' src={img3} alt="" />
                    <img className='img4' src={img4} alt="" />
                    <img className='img5' src={img5} alt="" />
                </div>
            </div>
        </>
    )
}

export default ExploreContent