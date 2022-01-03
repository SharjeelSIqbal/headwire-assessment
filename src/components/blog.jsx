import '../css/blog.css'
import { BlogCardContainer } from './blog-section'
import { BracketHeading, SectionSubHeading, WhiteBackgroundStyle } from './layout'

const Blog = () => (
  <div className='ptb-5 relative'>
    <div id='blog' className='w-container column m-center'>
      <div className="flex space-between align-center">
        <div className='column'>
          <BracketHeading className='uppercase'> Our Blog </BracketHeading>
          <SectionSubHeading className='section-heading'>Read Our Latest News</SectionSubHeading>
          <div className='border-dotted' />
        </div>
        <button className='blog-button uppercase relative'>
          View All
        <div className='blog-button-line-horizontal' />
        <div className='blog-button-line-vertical' />
        </button>
      </div>
      <BlogCardContainer />
    </div>
    <WhiteBackgroundStyle />
  </div>
)

export default Blog
