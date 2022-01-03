import { HeaderDropDown } from "."
import { useState } from 'react'

const HEADER_LINKS = [{
  heading: 'home',
  dropDownList: [
    'Main Home',
    'Interior Design',
    'Studio Home',
    'Architecture Agency',
    'Design Company',
    'Home Video',
    'Home Fullscreen',
    'Home One Page',
    'Home with Slide Menu',
  ]}, {
  heading: 'pages',
  dropDownList: [],
  }, {
  heading: 'services',
  dropDownList: [],
  }, {
  heading: 'portfolio',
  dropDownList: [],
  }, {
  heading: 'blog',
  dropDownList: [],
  }, {
  heading: 'contacts',
  dropDownList: [],
}]

const HeaderHead = () =>  {

  const [ currentActiveDropDown, setCurrentActiveDropDown ] = useState('')

  const handleClick = (e, link) => {
    e.preventDefault()
    if(currentActiveDropDown === link){
      setCurrentActiveDropDown('')
    } else {
      setCurrentActiveDropDown(link)
    }
  }

 return (
    <div className='header relative row-center'>
     <ul className='header-list row-center uppercase'>
       {HEADER_LINKS.map(link => {
         if(link.heading !== 'contacts') {
          return (
            <li key={link.heading} onClick={(e) => handleClick(e, link.heading)} className='header-links row-center relative'>
              <a className='white-text' href={`/${link.heading}`}>{link.heading}<span className='chevron-bottom'></span></a>
              {window.location.pathname === `/${link.heading}` && <div className="triangle" />}
              <HeaderDropDown dropDownList={link.dropDownList} isActive={link.heading === currentActiveDropDown} />
           </li>
             )}
             return (
              <li key={link.heading} className='header-links row-center relative'>
                <a className='white-text' href={`/${link.heading}`}>{link.heading}</a>
                 {window.location.pathname === `/${link.heading}` && <div className="triangle" />}
              </li>
             )}
         )}
    </ul>

  </div>
  )
}

export default HeaderHead
