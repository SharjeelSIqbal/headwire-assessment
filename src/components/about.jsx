import { BracketHeading, SectionHeading } from "./layout"
import { AboutUsCardContainer } from "./about-us"
import '../css/about-us.css';

const AboutUs = () => {
  const accolades = [{
    bracket: '180+',
    achievement: 'CURRENT CLIENTS'
  }, {
    bracket: '10+',
    achievement: 'YEARS OF EXPERIENCE'
  }, {
    bracket: '35+',
    achievement: 'AWARDS WINNING'
  }, {
    bracket: '5+',
    achievement: 'OFFICES WORLDWIDE'
  }]

  return (
    <div className='about-us-section'>
      <div>
        <div></div>
        <div></div>
      </div>
      <div className='about-us-container column-center m-center'>
        <div className='column-center'>
          <BracketHeading className='m-0'>[ OUR SERVICES ]</BracketHeading>
          <SectionHeading>What Can We Offer</SectionHeading>
          <div className='border-dotted' />
        </div>
        <div className='row-center'>
          <AboutUsCardContainer />
        </div>
        <div className='row-center g-6 m-0'>
          {accolades.map(accolade => (
            <div className='column-center'>
            <BracketHeading className='accolade-number'>[{accolade.bracket}]</BracketHeading>
            <SectionHeading className='accolade m-0'>{accolade.achievement}</SectionHeading>
          </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
