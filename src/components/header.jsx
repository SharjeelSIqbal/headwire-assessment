import { HeaderSidebar, HeaderLogo, HeaderHead, HeaderMenu, HeaderCenter } from './header-section'
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc'
import '../css/header.css'
const HeaderSection = () => {
  const bgImg = ['/imgs/slider1-home1.jpeg', '/imgs/slider2-home1.jpeg', '/imgs/slider3-home1.jpeg']

  return (
    <div id='header' className='header-grid relative'>
      <HeaderLogo />
      <HeaderHead />
      <HeaderMenu />
      <HeaderSidebar />
      <HeaderCenter background='STUDIO' />
      <div className='header-nothing' />
      <div className='header-bottom' />
      <div className='header-next'>
        <button className='header-carousel-button'>
          <VscArrowRight />
        </button>
      </div>
      <div className='header-prev flex justify-end'>
        <button className='header-carousel-button header-prev-button'>
          <VscArrowLeft/>
        </button>
      </div>
      <img src={bgImg[2]} alt="background" className='header-background-image'/>
    </div>
  )
}

export default HeaderSection
