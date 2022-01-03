import { RiShoppingBag2Line } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'

const HeaderShopping = () => (
  <div className="header-shopping row-center">
    <div className='header-cart'>
      <RiShoppingBag2Line />
      <div className="circle header-shopping-bag row-center">2</div>
    </div>
    <div className="header-search">
      <AiOutlineSearch />
    </div>
  </div>
)

export default HeaderShopping
