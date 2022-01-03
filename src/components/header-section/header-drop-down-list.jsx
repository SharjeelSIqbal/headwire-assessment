const HeaderDropDownList = ({ list  }) => (
  <ul className='header-drop-down-list'>
    {
      list.map(listItem => (
        <li className='header-drop-down-list-item'>{listItem}</li>
      ))
    }
  </ul>
)

export default HeaderDropDownList
