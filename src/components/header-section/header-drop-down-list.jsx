const HeaderDropDownList = ({ list }) => {
  return (
    <ul className='header-drop-down-list titillium white-text text-transform-normal p-1'>
      {
        list.map(listItem => (
          <li className='header-drop-down-list-item p-pt5 flex align-center'>
            <div className='header-drop-down-border' />
            {listItem}
          </li>
        ))
      }
    </ul>
    )
  }


export default HeaderDropDownList
