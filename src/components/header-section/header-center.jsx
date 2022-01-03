const HeadCenter = ({ slide }) => (
  <div className='header-center header-center-border column-center'>
    <div className='header-center-container column-center'>
      <h1 className='header-center-heading relative white-text titillium-light'>
        <span>{slide.heading}</span>
        <div className='header-absolute-center-content'>
          <h1 className='header-background-new rubik m-0 uppercase'>{slide.text}</h1>
        </div>
      </h1>
      <h4 className='header-center-content white-text raleway'>
        We pride ourselves on being builders &mdash; creating
        architectural and creative solutions to help people
        realize their visions and make them a reality. Wanna
        work with us?
      </h4>
      <button className='header-button white-text merriweather uppercase'>View Projects</button>
    </div>
    <img src={slide.img} alt="background" className='header-background-image' />
  </div>
)

export default HeadCenter
