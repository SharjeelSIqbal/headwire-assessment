const SOCIAL_MEDIA = ['pinterest', 'twitter', 'facebook', 'instagram']

const HeaderSidebar = () => (
  <div className='header-social-media'>
    <ul className='header-links-side-bar column-center uppercase'>
        {
        SOCIAL_MEDIA.map(link => (
          <li key={link} className='header-side-link-text white-text'>
            <a>{link}</a>
          </li>
        ))
        }
    </ul>
</div>
)

export default HeaderSidebar
