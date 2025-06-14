import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function Header() {
    
    return (
        <>
            <div className='pageHeader'>
                <div className='firstSection'>
                    <h2>Meet your TV concierge.</h2>
                    <p>Need something to watch? We’re on it. 
                    Plex combines free movies & TV with the best 
                    free streaming services, so there’s always more 
                    to discover.</p>
                    <button>Start Streaming</button>
                </div>
                <div className='carousel-container'>
                    <div className="top-bar">
                        <div className="carousel-navItems">
                            <span>Discover</span>
                            <span>Movies & Shows</span>
                            <span>Live TV</span>
                            <span>Your Media</span>
                            <span>Your Music</span>
                        </div>
                    </div>
                        <Carousel>
                            <Carousel.Item className='carousel1'>
                                <ExampleCarouselImage 
                                text="First slide" 
                                img={"src/assets/Images/Slider1/slider1.webp"}
                                style={{
                                    width:'auto',
                                    height:'21em',
                                    borderRadius:'20px',
                                    position:'relative',
                                    left:"150px",
                                    top:"50px"
                                }}
                                />
                                <Carousel.Caption className='slider1'>
                                <h3>What will we Discover Together?</h3>
                                <p>Finding what to watch next is better when you do it together. Search for and add friends, share, comment and more using Discover on Plex.</p>
                                <button>Learn More</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='carousel2'>
                                <ExampleCarouselImage 
                                text="Second slide" 
                                img={"src/assets/Images/Slider2/slider2.webp"}
                                style={{
                                    width:'40em',
                                    height:'22em',
                                    borderRadius:'15px',
                                }}
                                />
                                <Carousel.Caption className='slider2'>
                                <h3>What we're watching now.</h3>
                                <p>this is just a peek. Choose from thousands of free ad-supported titles from our on-demand library.</p>
                                <button>See What's On</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='carousel3'>
                                <ExampleCarouselImage 
                                text="Third slide" 
                                img={"src/assets/Images/Slider4/slider4.webp"}
                                style={{
                                    width:'auto',
                                    height:'22em',
                                    borderRadius:'20px',
                                    position:'relative',
                                    left:"100px",
                                    top:"30px"
                                }}
                                />
                                <Carousel.Caption className='slider3'>
                                <h3>Bring your media to the pro side.</h3>
                                <p>There's a lot of option's out there for storing your media. But if your looking to organize, stream, and share it in the most beautiful way possible, Plex is your app.</p>
                                <button>Get Plex Media Server</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </div>
            </div>
        </>
    )
}

export default Header