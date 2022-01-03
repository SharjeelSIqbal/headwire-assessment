import HeaderDropDownList from "./header-drop-down-list"

const HOME_DROP_DOWN_LIST = [ 'Main Home', 'Interior Design', 'Studio Home', 'Architecture Agency', 'Design Company', 'Home Video', 'Home Fullscreen', 'Home One Page', 'Home with Slide Menu', ]

const HeaderDropDown = () => (
  <div className='header-drop-down'>
    <HeaderDropDownList list={HOME_DROP_DOWN_LIST}  />
  </div>
)

export default HeaderDropDown
