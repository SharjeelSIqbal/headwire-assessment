const AboutUsCard = ({ content }) => (
  <div className='about-us-card-container about-us-card w-33'>
    <div className="column-center titillium mtb-card plr-3">
        <img  className='icon-100' src={content.img} alt="Cube 1" />
        <h4 className='mb-pt5'>{content.heading}</h4>
        <p className='raleway text-align-center about-card-context gray-text mt-pt5'>{content.context}</p>
        <a className='read-more bold'>READ MORE</a>
    </div>
  </div>
)

export default AboutUsCard
