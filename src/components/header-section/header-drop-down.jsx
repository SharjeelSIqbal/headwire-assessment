import HeaderDropDownList from "./header-drop-down-list"

const HeaderDropDown = ({ dropDownList, heading }) => (
  <div className={`header-${heading}-drop-down`}>
    <HeaderDropDownList list={dropDownList}  />
  </div>
)


export default HeaderDropDown
