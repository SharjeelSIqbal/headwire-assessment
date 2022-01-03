const BlogCard = ({ post }) => (
  <div className='blog-card'>
    <div className='column-center m-1'>
      <div className='blog-img mb-1 relative'>
        <img className='w-100 relative' src={post.img} alt={post.imgAlt} />
        <div className='blog-design-style uppercase row-center bold white-text roboto'>
          <p className='m-0'>{post.designStyle}</p>
        </div>
      </div>
      <div className='w-100 flex blog-cite m-0'>
        <h5 className='m-0 flex align-center uppercase g-1 titillium'>
          <span>{post.date}</span>
          <div className='flex'>
            <div className='blog-circle' />
            <div className='blog-circle' />
          </div>
          <span> {post.author}</span>
        </h5>
      </div>
      <div className='titillium'>
        <a>
          <h3 className='mt-1 mb-1'>{post.title}</h3>
        </a>
      </div>
      <div className='w-100 titillium'>
        <p className='m-0 w-100 blog-content'>
          {post.content}
        </p>
      </div>
    </div>
  </div>
)

export default BlogCard
