import React from 'react'
import extraImg from '../assets/pms-devices-image.webp'
import searchstarImg from '../assets/discover-credits-1024x918.webp'
import chevronImg from '../assets/plex-chevron.webp'

function ExtraContent() {

    return (
        <>
            <div className='extra-container'>
                <div className='extra-text'>
                    <h5>You bring your media, we’ll do the rest.</h5>
                    <p>We love personal media too! Use Plex to organize, 
                    beautify, and stream your personal collection of movies, 
                    TV shows, music, and photos anywhere, on all your devices.</p>
                    <button>Learn More</button>
                </div>
                <div className='extra-img'>
                    <img src={extraImg} alt="" />
                </div>
            </div>
            <div className='searchstar-container'>
                <div className='searchstar-image'>
                    <img src={searchstarImg} alt="" />
                </div>
                <div className='searchstar-text'>
                    <h5>And that’s just (film) facts.</h5>
                    <p>See what films and shows your favorite 
                    actors are in (and add them to your Watchlist) 
                    without ever leaving Plex! With Discover Credits, 
                    it’s all united into a single page, including which 
                    of their titles are available in your personal media 
                    libraries, on demand, or elsewhere via Discover.</p>
                    <button>Search the Stars</button>
                </div>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-text'>
                        <h4>Streaming</h4>
                        <h5>Is Believing</h5>
                    </div>
                    <div className='card-image'>
                        <img src={chevronImg} alt="" />
                    </div>
                    <button>Get Plex Free</button>
                </div>
            </div>
        </>
    )
}

export default ExtraContent