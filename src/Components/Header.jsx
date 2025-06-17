import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import firstSlide from '../assets/Images/Slider1/slider1.webp'
import secondSlide from '../assets/Images/Slider2/slider2.webp'
import secondSlide1 from '../assets/Images/Slider2/slider2-1.webp'
import secondSlide2 from '../assets/Images/Slider2/slider2-2.avif'
import secondSlide3 from '../assets/Images/Slider2/slider2-3.avif'
import secondSlide4 from '../assets/Images/Slider2/slider2-4.avif'
import secondSlide5 from '../assets/Images/Slider2/slider2-5.avif'
import secondSlide6 from '../assets/Images/Slider2/slider2-6.avif'
import thirdSlide from '../assets/Images/Slider4/slider4.webp'

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
                    <Carousel className='carousel-box'>
                        {/* first slide */}
                        <Carousel.Item>
                            <div className="carousel1">
                                <ExampleCarouselImage 
                                text="First slide" 
                                img={firstSlide}
                                style={{
                                    borderRadius:'13px',
                                    width:'32rem',
                                    height:'28rem',
                                    position:'relative',
                                    left:"15rem",
                                    top:"4rem"
                                }}
                                />
                                <Carousel.Caption className='slider1'>
                                <h3>What will we Discover Together?</h3>
                                <p>Finding what to watch next is better when you do it together. Search for and add friends, share, comment and more using Discover on Plex.</p>
                                <button>Learn More</button>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        {/* second slide */}
                        <Carousel.Item className='carousel2'>
                            <ExampleCarouselImage 
                            text="Second slide" 
                            img={secondSlide}
                            style={{
                                borderRadius:'13px',
                                width:'70rem',
                                height:'34.5rem',
                                position:'relative',
                                bottom:'0.4rem',
                                right:'3.3rem'
                            }}
                            />
                            <Carousel.Caption className='slider2'>
                            <h3>What we're watching now.</h3>
                            <p>this is just a peek. Choose from thousands of free ad-supported titles from our on-demand library.</p>
                            <button>See What's On</button>
                            </Carousel.Caption>
                            <Carousel.Caption className='slider2A'>
                                <img src={secondSlide1} alt="" />
                                <img src={secondSlide2} alt="" />
                                <img src={secondSlide3} alt="" />
                                <img src={secondSlide4} alt="" />
                                <img src={secondSlide5} alt="" />
                                <img src={secondSlide6} alt="" />
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* third item */}
                        <Carousel.Item className='carousel3'>
                            <ExampleCarouselImage 
                            text="Third slide" 
                            img={thirdSlide}
                            style={{
                                width:'32rem',
                                height:'30rem',
                                position:'relative',
                                left:"14rem",
                                top:"2rem"
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