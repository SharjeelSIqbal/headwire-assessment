import HeaderDropDownList from "./header-drop-down-list"

const HeaderDropDown = ({ isActive, dropDownList }) => {
  const className = isActive && dropDownList.length > 0
    ? 'header-drop-down'
    : 'hidden'

  return (
    <div className={className}>
      <HeaderDropDownList list={dropDownList}  />
    </div>
  )
}

export default HeaderDropDown
