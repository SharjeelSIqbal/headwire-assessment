import '../css/footer.css'
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiInstagramLine  } from 'react-icons/ri'
import { IoMailOpenOutline, IoLocationOutline } from 'react-icons/io5'
import { FiPhone, FiSend } from 'react-icons/fi'

const Footer = () => (
  <footer id='footer' className='footer-background ptb-4'>
    <div className='w-container flex align-center space-between m-center raleway'>
      <div className='column g-1 w-25 gray-text'>
        <div className='flex'>
          <img  className='w-50' src='/imgs/logo-footer.svg' alt='logo'/>
        </div>
        <p className='gray-text line-1pt5 footer-content mb-0 mt-1'>We provide a full range of interior design and architectural design.</p>
        <div className='flex align-center g-1 w-100  social-links'>
          <div className='circle circle-links row-center white-text footer-media-logo'>
            <RiFacebookFill />
          </div>
          <div className="circle circle-links row-center white-text footer-media-logo">
            <RiTwitterFill />
          </div>
          <div className="circle circle-links row-center white-text footer-media-logo">
            <RiLinkedinFill />
          </div>
          <div className="circle circle-links row-center white-text footer-media-logo">
            <RiInstagramLine />
          </div>
        </div>
      </div>
      <div className='column justify-center footer-section g-1 mt-pt5 w-25'>
        <h4 id='contacts' className='footer-heading m-0'>Contacts</h4>
        <div className='flex g-pt5'>
          <IoLocationOutline className='footer-icon gray-text' />
          <p className='gray-text footer-content'>411 University St. Seattle, USA</p>
        </div>
        <div className='flex g-pt5'>
          <IoMailOpenOutline className='footer-icon gray-text' />
          <p className="gray-text footer-content">theratio_interior@mail.com</p>
        </div>
        <div className='flex g-pt5'>
          <FiPhone className='footer-icon gray-text' />
          <p className="gray-text footer-content">&#8314;1 800 456 789 123</p>
        </div>
      </div>
      <div className='column footer-section w-25 g-1 mt-pt5'>
        <h4 id='projects' className='footer-heading m-0'>Latest Projects</h4>
        <p className="gray-text footer-content">Stylish Family Apartment</p>
        <p className="gray-text footer-content">Modern Vila in Belgium</p>
        <p className="gray-text footer-content">Private House in Spain</p>
      </div>
      <div className='column footer-section  w-25 g-1 mt-pt5'>
        <h4 className="footer-heading m-0">Subscribe</h4>
        <form onSubmit={(e) => e.preventDefault()}className='relative w-75'>
          <input className='footer-input w-100' type="text" placeholder='YOUR EMAIL' />
          <button type='submit'className='footer-send'>
            <FiSend className='white-text footer-subscribe-icon'/>
          </button>
        </form>
        <p className="gray-text footer-subscribe mb-1">Follow our newsletter to stay updated about our agency.</p>
      </div>
    </div>
  </footer>
)

export default Footer
