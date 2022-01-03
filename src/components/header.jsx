import { HeaderSidebar, HeaderLogo, HeaderHead, HeaderMenu, HeaderCenter } from './header-section'
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc'
import '../css/header.css'

const HeaderSection = () => {
  const background = [{
    img:'/imgs/slider1-home1.jpeg',
    text: 'design'
  }, {
    img: '/imgs/slider2-home1.jpeg',
    text: 'art'
  }, {
    img:'/imgs/slider3-home1.jpeg',
    text: 'studio'
  }]

  return (
    <div id='header' className='header-grid relative'>
      <HeaderLogo />
      <HeaderHead />
      <HeaderMenu />
      <HeaderSidebar />
      <HeaderCenter background={background[2]} />
      <div className='header-nothing' />
      <div className='header-bottom' />
      <div className='header-next'>
        <button className='header-carousel-button header-next-button'>
          <VscArrowRight />
        </button>
      </div>
      <div className='header-prev flex justify-end'>
        <button className='header-carousel-button p-0'>
          <VscArrowLeft/>
        </button>
      </div>
    </div>
  )
}

export default HeaderSection
