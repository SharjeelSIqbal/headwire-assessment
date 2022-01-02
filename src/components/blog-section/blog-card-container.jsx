import { BlogCard } from "."


const BlogCardContainer = () => {
  const blogs = [{
    img: '/imgs/grid1.jpeg',
    imgAlt: 'interior design',
    designStyle: 'interior',
    date: 'March 19, 2020',
    author: 'tom black',
    title: 'Top 10 Tips for Your Kitchen Interior Design',
    content: 'A faceting effect livens up and inspires creativity'
  }, {
    img: './imgs/grid2.jpeg',
    imgAlt: 'house design',
    designStyle: 'interior',
    date: 'March 19, 2020',
    author: 'Tom Black',
    title: 'The Golden Ratio Rules for Best 2D Sketch',
    content: 'A faceting effect livens up and inspires creativity'
  }, {
    img: './imgs/grid3.jpeg',
    imgAlt: 'interior design',
    designStyle: 'interior',
    date: 'March 19, 2020',
    author: 'tom black',
    title: `Use Pastel Colors & Natural Materials`,
    content: 'A facetting effect livens up and inspires creativity'
  }]

  return (
    <div className="flex align-center space-between w-100 mtb-2">
      {blogs.map(post => <BlogCard key={post.title}post={post} />)}
    </div>
  )

}
export default BlogCardContainer
