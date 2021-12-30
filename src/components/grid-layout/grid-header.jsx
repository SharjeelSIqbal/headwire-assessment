

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
    heading: 'CONTACTS',
    path: '/contacts'
  }]

 return (
    <div className='header relative row-center'>
     <ul className='header-list row-center'>
       {headerLinks.map(link => {
         if(link.heading !== 'CONTACTS') {
          return (
            <li key={link.path} className='header-links row-center relative'>
              <a className='white-text' href={link.path}>{link.heading}<span className='chevron-bottom'></span></a>
              {window.location.pathname === link.path && <div className="triangle" />}
           </li>
             )}
             return (
              <li key={link.path} className='header-links row-center relative'>
                <a className='white-text' href={link.path}>{link.heading}</a>
                 {window.location.pathname === link.path && <div className="triangle" />}
              </li>
             )}
         )}
    </ul>
  </div>
  )
}

export default GridHeader
