import '../css/about-us.css'
import { BracketHeading, SectionSubHeading, WhiteBackgroundStyle } from './layout'
import { AboutUsCardContainer } from './about-us-section'

const ACCOLADES = [{
  bracket: '180+',
  achievement: 'Current Clients'
}, {
  bracket: '10+',
  achievement: 'Years of Experience'
}, {
  bracket: '35+',
  achievement: 'Awards Winning'
}, {
  bracket: '5+',
  achievement: 'Offices Worldwide'
}]

const AboutUs = () => (
  <div id='#about-us' className='ptb-4 relative'>
    <div className='w-container column-center m-center'>
      <div className='column-center'>
        <BracketHeading className='uppercase'> Our Services </BracketHeading>
        <SectionSubHeading className='section-heading'>What Can We Offer</SectionSubHeading>
        <div className='border-dotted' />
      </div>
      <div className='row-center'>
        <AboutUsCardContainer />
      </div>
      <div className='row-center g-6 m-0'>
        {ACCOLADES.map(accolade => (
          <div className='column-center' key={accolade.achievement}>
            <BracketHeading className='about-us-accolade-number'>{accolade.bracket}</BracketHeading>
            <SectionSubHeading className='about-us-accolade m-0 bold uppercase'>{accolade.achievement}</SectionSubHeading>
          </div>
          ))}
      </div>
    </div>
    <WhiteBackgroundStyle />
  </div>
)

export default AboutUs
