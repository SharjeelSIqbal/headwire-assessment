import TeamMember from './team-member'
import team from '../sample.json'
import { useState } from 'react'
import { TeamCarouselButton } from '../layout'
import chunk from 'lodash.chunk'

const PAGES = chunk(team, 5)

const TeamContainer = () => {
  const [ currentTeamIndex, setCurrentTeamIndex ] = useState(0)

  return (
    <div className="column-center w-100 team-container">
      <div className='row-center team-min-height'>
        {
          PAGES[currentTeamIndex].map((member, index) => (
            <TeamMember key={`${member.first_name} ${member.last_name}`} member={member} />
          ))
        }
      </div>
      <div className='row-center g-pt5 mtb-2'>
        {
          PAGES.map((_page, index) => (
            <TeamCarouselButton key={index} handleChange={() => setCurrentTeamIndex(index)} isActive={currentTeamIndex === index} />
          ))
        }
      </div>
    </div>
  )
}

export default TeamContainer
