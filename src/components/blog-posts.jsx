import '../css/blog.css'
import { BlogCardContainer } from './blog'
import { BracketHeading, SectionSubHeading } from './layout'

const Blog = () => (
  <div className='ptb-4'>
    <div id='blog' className='w-container column m-center'>
      <div className="flex space-between align-center">
        <div className='column'>
          <BracketHeading> OUR BLOG </BracketHeading>
          <SectionSubHeading className='medium'>Read Our Latest News</SectionSubHeading>
          <div className='border-dotted' />
        </div>
        <button className='blog-button relative'>
          View All
        <div className='blog-button-line-horizontal' />
        <div className='blog-button-line-vertical' />
        </button>
      </div>
      <BlogCardContainer />
    </div>
  </div>
)

export default Blog
