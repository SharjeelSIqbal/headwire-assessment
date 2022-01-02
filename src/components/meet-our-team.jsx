import '../css/team.css'
import { BracketHeading, SectionSubHeading } from './layout'
import { TeamContainer } from './team'

const MeetOurTeam  = () => {
  return (
    <div id='team' className='team-section ptb-2'>
      <div className='column-center g-3'>
        <div className='column-center'>
          <BracketHeading> OUR PROFESSIONALS </BracketHeading>
          <SectionSubHeading className='section-heading'>Meet Our Skilled Team</SectionSubHeading>
          <div className="border-dotted" />
        </div>
        <TeamContainer />
      </div>
    </div>
  )
}

export default MeetOurTeam
