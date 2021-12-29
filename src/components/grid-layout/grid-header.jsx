

const GridHeader = () =>  {
 const headerLinks = [{
   heading:'HOME',
   path: '/'
  }, {
    heading: 'PAGES',
    path: '/pages'
  },{
    heading: 'SERVICES',
    path: '/services'
  }, {
    heading: 'PORTFOLIO',
    path: '/portfolio'
  }, {
    heading: 'BLOG',
    path: '/blog'
  }, {
    heading: 'CONTACT',
    path: '/contact'
  }]

 return (
    <div className='header row-center'>
     <ul className='header-list row-center'>
       {headerLinks.map(link => link.heading !== 'CONTACTS'
         ? <li key={link.path} className='header-links white-text row-center'>
            <a>{link.heading}<span className='chevron-bottom'></span></a>
           </li>
         : <li key={link.path} className='header-links white-text row-center'>
            <a>{link.heading}</a>
           </li>
         )}
    </ul>
  </div>
  )
}

export default GridHeader
