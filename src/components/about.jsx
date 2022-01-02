import { BracketHeading, SectionSubHeading } from "./layout"
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
    <div id='#about-us' className='ptb-4'>
      <div className='w-container column-center m-center'>
        <div className='column-center'>
          <BracketHeading> OUR SERVICES </BracketHeading>
          <SectionSubHeading className='section-heading'>What Can We Offer</SectionSubHeading>
          <div className='border-dotted' />
        </div>
        <div className='row-center'>
          <AboutUsCardContainer />
        </div>
        <div className='row-center g-6 m-0'>
          {accolades.map(accolade => (
            <div className='column-center'>
            <BracketHeading className='about-us-accolade-number'>{accolade.bracket}</BracketHeading>
            <SectionSubHeading className='about-us-accolade m-0 bold'>{accolade.achievement}</SectionSubHeading>
          </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
