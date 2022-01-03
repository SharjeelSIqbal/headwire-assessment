const HeaderSidebar = () => {
 const socialMedia = ['pinterest', 'twitter', 'facebook', 'instagram']
 return (
  <div className='header-social-media'>
    <ul className='header-links-side-bar column-center uppercase'>
       {socialMedia.map(link => (
       <li key={link} className='header-side-link-text white-text'>
         <a>{link}</a>
       </li>
       ))}
    </ul>
  </div>
 )
}

export default HeaderSidebar
