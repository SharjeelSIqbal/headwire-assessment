import { HeaderSidebar, HeaderLogo, HeaderHead, HeaderMenu, HeaderCenter } from './header'
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc'
import '../css/header.css'
const HeaderSection = () => {
  const bgImg = ['/imgs/slider1-home1.jpeg', '/imgs/slider2-home1.jpeg', '/imgs/slider3-home1.jpeg']

  return (
    <div className='grid relative'>
      <HeaderLogo />
      <HeaderHead />
      <HeaderMenu />
      <HeaderSidebar />
      <HeaderCenter background='STUDIO' />
      <div className='nothing' />
      <div className='bottom' />
      <div className='next'>
        <button className='grid-carousel-button'>
          <VscArrowRight />
        </button>
      </div>
      <div className='prev flex justify-end'>
        <button className='grid-carousel-button grid-prev-button'>
          <VscArrowLeft/>
        </button>
      </div>
      <img src={bgImg[2]} alt="" className='background-image'/>
    </div>
  )
}

export default HeaderSection
