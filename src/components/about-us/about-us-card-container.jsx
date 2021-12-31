import  { AboutUsCard } from "."

const AboutUsCardContainer = () => {
  const contents = [{
    img: '/imgs/iconbox1.2.png',
    heading: 'Design & Planning',
    context: 'We will help you to get the result you dreamed of.'
  }, {
    img: '/imgs/iconbox1.1.png',
    heading: 'Custom Solutions',
    context: 'Individual. aesthetically stunning solutions for customers.'
  }, {
    img: '/imgs/iconbox1.3.png',
    heading: 'Furniture & Decor',
    context: 'We create and produce our product design lines.'
  }]

return (
  <div className="row-center g-1pt5 mtb-container">
    {contents.map(content => <AboutUsCard content={content} />)}
  </div>
 )
}

export default AboutUsCardContainer
