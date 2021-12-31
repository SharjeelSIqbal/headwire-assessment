const HeaderSidebar = () => {
 const socialMedia = ['PINTEREST', 'TWITTER', 'FACEBOOK', 'INSTAGRAM']
 return (
  <div className='social-media'>
    <ul className='links-side-bar column-center'>
       {socialMedia.map(link => (
       <li key={link} className='side-link-text white-text'>
         <a>{link}</a>
       </li>
       ))}
    </ul>
  </div>
 )
}

export default HeaderSidebar
