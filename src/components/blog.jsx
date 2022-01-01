import '../css/blog.css'
import { BracketHeading, SectionSubHeading } from './layout'

const Blog = () => (
  <div className='ptb-4'>
    <div id='blog' className='w-container column m-center'>
      <div className="flex space-between">
        <div className='column'>
          <BracketHeading> OUR BLOG </BracketHeading>
          <SectionSubHeading>Read Our Latest News</SectionSubHeading>
          <div className='border-dotted' />
        </div>
        <button className='blog-button'>
          View All
        </button>
      </div>
      <div className="row-center">

      </div>
    </div>
  </div>
)

export default Blog
