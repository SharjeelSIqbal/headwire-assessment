const HeaderSidebar = () => {
 const socialMedia = ['PINTEREST', 'TWITTER', 'FACEBOOK', 'INSTAGRAM']
 return (
  <div className='header-social-media'>
    <ul className='header-links-side-bar column-center'>
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
