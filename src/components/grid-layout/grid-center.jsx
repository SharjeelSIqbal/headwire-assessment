const GridCenter = ({ background }) => (
  <div className='grid-center column-center'>
    <div className='grid-center-container relative column-center'>
      <h1 className='grid-center-heading white-text titillium-light'>
        Best Furniture and Decor
      </h1>
      <h4 className='grid-center-content white-text raleway'>
        We pride ourselves on being builders &mdash; creating
        architectural and creative solutions to help people
        realize their visions and make them a reality. Wanna
        work with us?
      </h4>
      <button className='grid-button white-text merriweather'>VIEW PROJECTS</button>
      <div className='grid-absolute-center-content'>
        <svg className='text-svg background-new' viewBox='0 0 250 80' xmlns='http://www.w3.org/2000/svg'>
          <text x='45' y='30' className='background-new'>
            {background}
          </text>
        </svg>
      </div>
    </div>

  </div>
)

export default GridCenter
