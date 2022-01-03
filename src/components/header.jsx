import {  HeaderSidebar, HeaderLogo, HeaderHead, HeaderMenu, HeaderCenter } from './header-section'
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc'
import '../css/header.css'
import { useState, useEffect } from 'react'

const SLIDE_COUNTDOWN = 4000
const SLIDE = [{
  img: '/imgs/slider1-home1.jpeg',
  text: 'design',
  heading: 'Panel of Interior',
}, {
  img: '/imgs/slider2-home1.jpeg',
  text: 'art',
  heading: 'Masterful Art'
}, {
  img: '/imgs/slider3-home1.jpeg',
  text: 'studio',
  heading: 'Best Furniture and Decor'
}]

const Header = () => {

  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0)

  const currentSlide = SLIDE[currentSlideIndex]

  const nextSlide = () => {
    if (currentSlideIndex !== SLIDE.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    } else {
      setCurrentSlideIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentSlideIndex !== 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
    } else {
      setCurrentSlideIndex(SLIDE.length - 1)
    }
  }

  useEffect(() => {
    let slideChangeTimeout = setTimeout(nextSlide, SLIDE_COUNTDOWN)

    return () => clearTimeout(slideChangeTimeout)
    // eslint-disable-next-line
  }, [currentSlideIndex])

  return (
    <div id='header' className='header-grid relative'>
      <HeaderLogo />
      <HeaderHead />
      <HeaderMenu />
      <HeaderSidebar />
      <HeaderCenter slide={currentSlide} />
      <div className='header-nothing' />
      <div className='header-bottom' />
      <div className='header-next'>
        <button onClick={nextSlide} className='header-carousel-button header-next-button'>
          <VscArrowRight />
        </button>
      </div>
      <div className='header-prev flex justify-end'>
        <button onClick={prevSlide} className='header-carousel-button p-0'>
          <VscArrowLeft />
        </button>
      </div>
    </div>
  )
}

export default Header
