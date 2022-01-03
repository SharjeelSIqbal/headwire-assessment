const HeadCenter = ({ background }) => (
  <div className='header-center column-center'>
    <div className='header-center-container relative column-center'>
      <h1 className='header-center-heading white-text titillium-light'>
        Best Furniture and Decor
      </h1>
      <h4 className='header-center-content white-text raleway'>
        We pride ourselves on being builders &mdash; creating
        architectural and creative solutions to help people
        realize their visions and make them a reality. Wanna
        work with us?
      </h4>
      <button className='header-button white-text merriweather uppercase'>View Projects</button>
      <div className='header-absolute-center-content'>
        <svg className='header-text-svg header-background-new rubik uppercase' viewBox='0 0 250 80' xmlns='http://www.w3.org/2000/svg'>
          <text x='45' y='30' className='background-new'>
            {background}
          </text>
        </svg>
      </div>
    </div>

  </div>
)

export default HeadCenter
