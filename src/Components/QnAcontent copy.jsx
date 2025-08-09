import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

function QnAcontent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2]=useState(false);
    const [isOpen3,setIsOpen3]=useState(false);
    const [isOpen4,setIsOpen4]=useState(false);
    const [isOpen5,setIsOpen5]=useState(false);
    const [isOpen6,setIsOpen6]=useState(false);
    const [isOpen7,setIsOpen7]=useState(false);
    const [isOpen8,setIsOpen8]=useState(false);

    return (
        <div className='QnA-container text-white'>
            <div className='header text-center'>Question or two? Here’s an answer or two.</div>
            <div className='qna1'>
                <div 
                className={`qna1-header ${isOpen?'active':''}`}
                onClick={()=>setIsOpen(!isOpen)}
                >
                    <h5>What is Plex?</h5>
                    <FaPlus className='icon1'/>
                </div>

                {isOpen &&
                (
                    <p className='qna1-body'>A one-stop destination to stream movies, TV shows, and music, 
                    Plex is the most comprehensive entertainment platform available today. Available on almost 
                    any device, Plex is the first-and-only streaming platform to offer free ad-supported movies, 
                    shows, and live TV together with the ability to easily search—and add to your Watchlist—any title 
                    ever made, no matter which streaming service it lives on. Using the platform as their entertainment 
                    concierge, 17 million (and growing!) monthly active users count on Plex for new discoveries and recommendations 
                    from all their favorite streaming apps, personal media libraries, and beyond.</p>
                )}
            </div>
            <div className='qna2'>
                <div className='qna2-header'
                onClick={()=>setIsOpen2(!isOpen2)}
                >
                    <h5>Is Plex really free?</h5>
                    <FaPlus className='icon2'/>
                </div>
                {isOpen2 &&
                (
                <p>Plex is a free streaming app for everyone, no credit cards 
                or subscription costs or hidden fees. To keep our service free 
                we include ads which monetize all of the content that our partners, 
                such as Lionsgate, AMC, and A24, provide to us.</p>
                )}
            </div>
            <div className='qna3'>
                <div className='qna3-header'
                onClick={()=>setIsOpen3(!isOpen3)}
                >
                    <h5>Where is the Plex available?</h5>
                    <FaPlus className='icon3'/>
                </div>
                {isOpen3 &&
                (
                <p>Plex is available in almost every country in the world. No other 
                free streaming service delivers more content to and from more countries 
                worldwide.</p>
                )}
            </div>
            <div className='qna4'>
                <div className='qna4-header'
                onClick={()=>setIsOpen4(!isOpen4)}
                >
                    <h5>Where can i watch Plex?</h5>
                    <FaPlus className='icon4'/>
                </div>
                {isOpen4 &&
                (
                <p>Watch Plex instantly online from your personal computer or on any 
                internet-connected device that offers the Plex app. That includes streaming 
                media players (Amazon Fire TV, Android TV, Apple TV, Chromecast, Roku, etc.), 
                smart TVs (LG, Hisense, Samsung, VIZIO, etc.), smartphones, tablets, game consoles, 
                and more!</p>
                )}
            </div>
            <div className='qna5'>
                <div className='qna5-header'
                onClick={()=>setIsOpen5(!isOpen5)}
                >
                    <h5>Do i need a Plex account?</h5>
                    <FaPlus className='icon5'/>
                </div>
                {isOpen5&&
                (<p>You do not need to create an account to use Plex, but you 
                get more when you do. Benefits that come with your free account 
                include access to your very own universal Watchlist, the ability 
                to customize the streaming services that show up in your search results, 
                the ability to pick up where you left off on any device, and more.</p>
                )}
            </div>
            <div className='qna6'>
                <div className='qna6-header'
                onClick={()=>setIsOpen6(!isOpen6)}
                >
                    <h5>How can i personalize my Plex account?</h5>
                    <FaPlus className='icon6'/>
                </div>
                {isOpen6&&
                (<p>It’s free and easy. Just create your free Plex account, and 
                you can add movies to your own universal Watchlist, add favorite 
                channels to your live TV lineup, personalize your streaming services, 
                and more.</p>)}
            </div>
            <div className='qna7'>
                <div className='qna7-header'
                onClick={()=>setIsOpen7(!isOpen7)}
                >
                    <h5>What is Plex Pass? And can i use it to watch Plex ad-free? </h5>
                    <FaPlus className='icon7'/>
                </div>
                {isOpen7&&
                (<p>Plex Pass is our premium subscription option designed for our 
                users looking to get the most out of their own personal media via 
                their Plex Media Server. We do not currently offer any option for 
                watching Plex-provided content without ads. A Plex Pass does not remove 
                ads, nor does it provide access to extra content on our free services. 
                Check out an overview on Plex Pass benefits <span>here</span>.</p>)}
            </div>
            <div className='qna8'>
                <div className='qna8-header'
                onClick={()=>setIsOpen8(!isOpen8)}
                >
                    <h5>Can i use Plex to enjoy my own personal media?</h5>
                    <FaPlus className='icon8'/>
                </div>
                {isOpen8 &&
                (<p>Yes! If you are looking for the perfect home for your own media, look 
                no further than the Plex Media Server. You can install the server on a computer 
                or NAS device you already have and then get up and running in minutes. Check out 
                our support articles <span>here</span>.</p>)}
            </div>
        </div>
    )
}

export default QnAcontent