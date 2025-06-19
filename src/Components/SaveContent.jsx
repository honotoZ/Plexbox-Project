import React from 'react'
import netflixPhone from '../assets/hero-homepage-watchlist-02_21.webp'
import netlflixLogo from '../assets/watch-these-location.webp'
import watchlistLogo from '../assets/watchlist_button_bookmark.png'

function SaveContent() {

    return (
        <>
            <div className='save-container'>
                <div className='save1'>Save</div>
                <div className='save2'>
                    <div>One list to rule them all.</div>
                </div>
                <div className='save3'>
                    <div className="save3Img">
                        <img className="netflixPhone" src={netflixPhone} alt="netflixPhone" />
                        <img className="netlflixLogo" src={netlflixLogo} alt="" />
                        <img className='watchlistLogo' src={watchlistLogo} alt="" />
                    </div>
                    <div className='save3Lastsection'>
                        <p>With a free Plex account you can keep a single, 
                        unified Watchlist for any movie or TV show you hear 
                        about, on any service—even theater releases! You can 
                        finally stop hopping between watchlists on Max, Amazon Prime, 
                        Paramount+, and all your other streaming services, and add it 
                        all on Plex instead.</p>
                        <button>Create Your Free Account</button>
                    </div>
                </div>
                <div className='save4'>
                    <h6>Praise for the Plex Watchlist</h6>
                    <p>It is essentially makes the app the center of your 
                    streaming universe, and in an increasingly convoluted 
                    digital media landscape, that's a useful function indeed.</p>
                    <span>- The New York Times</span>
                    <a href="#">Read The Article</a>
                </div>
            </div>
        </>
    )
}

export default SaveContent