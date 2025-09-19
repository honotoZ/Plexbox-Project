import Carousel from 'react-bootstrap/Carousel'
import ExampleCarouselImage from './ExampleCarouselImage'
import firstSlide from '../assets/Images/Slider1/slider1.webp'
import secondSlide from '../assets/Images/Slider2/slider2.webp'
import secondSlide1 from '../assets/Images/Slider2/slider2-1.webp'
import secondSlide2 from '../assets/Images/Slider2/slider2-2.avif'
import secondSlide3 from '../assets/Images/Slider2/slider2-3.avif'
import secondSlide4 from '../assets/Images/Slider2/slider2-4.avif'
import secondSlide5 from '../assets/Images/Slider2/slider2-5.avif'
import secondSlide6 from '../assets/Images/Slider2/slider2-6.avif'
import thirdSlide from '../assets/Images/Slider4/slider4.webp'
import { useState } from 'react'

function Header() {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const slides = [
    {
      img: firstSlide,
      text: 'First slide',
      style: {
        borderRadius: '13px',
        width: '32rem',
        height: '28rem',
        position: 'relative',
        left: '15rem',
        top: '4rem',
      },
      captionClass: 'slider1',
      title: 'What will we Discover Together?',
      desc: 'Finding what to watch next is better when you do it together. Search for and add friends, share, comment and more using Discover on Plex.',
      btn: 'Learn More',
    },
    {
      img: secondSlide,
      text: 'Second slide',
      style: {
        borderRadius: '13px',
        width: '70rem',
        height: '34.5rem',
        position: 'relative',
        bottom: '0.4rem',
        right: '3.3rem',
      },
      captionClass: 'slider2',
      title: "What we're watching now.",
      desc: "this is just a peek. Choose from thousands of free ad-supported titles from our on-demand library.",
      btn: "See What's On",
      extraImgs: [
        secondSlide1,
        secondSlide2,
        secondSlide3,
        secondSlide4,
        secondSlide5,
        secondSlide6,
      ],
    },
    // third, fourth, fifth slides look the same → reuse
    ...Array(3).fill({
      img: thirdSlide,
      text: 'Third slide',
      style: {
        width: '32rem',
        height: '30rem',
        position: 'relative',
        left: '14rem',
        top: '2rem',
      },
      captionClass: 'slider3',
      title: 'Bring your media to the pro side.',
      desc: "There's a lot of option's out there for storing your media. But if your looking to organize, stream, and share it in the most beautiful way possible, Plex is your app.",
      btn: 'Get Plex Media Server',
    }),
  ]

  return (
    <div className='pageHeader'>
      <div className='firstSection'>
        <h2>Meet your TV concierge.</h2>
        <p>
          Need something to watch? We’re on it. Plex combines free movies & TV
          with the best free streaming services, so there’s always more to
          discover.
        </p>
        <button>Start Streaming</button>
      </div>

      <div className='carousel-container'>
        <div className='top-bar'>
          <div className='carousel-navItems'>
            <span onClick={() => setIndex(0)}>Discover</span>
            <span onClick={() => setIndex(1)}>Movies & Shows</span>
            <span onClick={() => setIndex(2)}>Live TV</span>
            <span onClick={() => setIndex(3)}>Your Media</span>
            <span onClick={() => setIndex(4)}>Your Music</span>
          </div>
        </div>

        <Carousel
          className='carousel-box'
          activeIndex={index}
          onSelect={handleSelect}
        >
          {slides.map((slide, idx) => (
            <Carousel.Item key={idx} className={`carousel${idx + 1}`}>
              <ExampleCarouselImage
                text={slide.text}
                img={slide.img}
                style={slide.style}
              />
              <Carousel.Caption className={slide.captionClass}>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                <button>{slide.btn}</button>
              </Carousel.Caption>

              {slide.extraImgs && (
                <Carousel.Caption className='slider2A'>
                  {slide.extraImgs.map((extra, i) => (
                    <img key={i} src={extra} alt='' />
                  ))}
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Header
