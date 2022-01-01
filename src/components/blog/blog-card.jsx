const BlogCard = ({ img, imgAlt, date, author, heading, content, designStyle}) => (
  <div className='blog-card column-center plr-2'>
    <div className='relative'>
      <img className='blog-image' src={img} alt={imgAlt} />
      <div className='blog-design-style'>{designStyle}</div>
    </div>
    <div></div>

  </div>
)

export default BlogCard
