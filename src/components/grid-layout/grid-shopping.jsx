import { RiShoppingBag2Line } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'

const GridShopping = () => (
  <div className="shopping row-center">
    <div className='cart'>
      <div>
        <RiShoppingBag2Line />
      </div>
      <div>
        <div className="circle shopping-bag row-center">2</div>
      </div>
    </div>
    <div className="grid-search">
      <AiOutlineSearch />
    </div>
  </div>
)

export default GridShopping
