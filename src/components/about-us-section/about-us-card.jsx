const AboutUsCard = ({ content }) => (
  <div className='about-us-card w-33'>
    <div className="column-center titillium mtb-2 plr-3">
        <img  className='about-us-icon-100' src={content.img} alt={content.heading} />

        <h4 className='mb-pt5'>{content.heading}</h4>
        <p className='raleway text-align-center about-card-context '>{content.context}</p>
        <a className='about-us-read-more bold uppercase'>Read more</a>
    </div>
  </div>
)

export default AboutUsCard
