const HeaderHead = () =>  {
 const headerLinks = ['home', 'pages', 'services', 'portfolio', 'blog', 'contacts']
 return (
    <div className='header relative row-center'>
     <ul className='header-list row-center uppercase'>
       {headerLinks.map(link => {
         if(link !== 'contacts') {
          return (
            <li key={link} className='header-head-links row-center relative'>
              <a className='white-text' href={`/${link}`}>{link}<span className='chevron-bottom'></span></a>
              {window.location.pathname === `/${link}` && <div className="triangle" />}
           </li>
             )}
             return (
              <li key={link} className='header-head-links row-center relative'>
                <a className='white-text' href={`/${link}`}>{link}</a>
                 {window.location.pathname === `/${link}` && <div className="triangle" />}
              </li>
             )}
         )}
    </ul>
  </div>
  )
}

export default HeaderHead
