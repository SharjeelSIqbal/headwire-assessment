import TeamMember from './team-member'
import team from '../sample.json'
import { useState } from 'react'
import { TeamCarouselButton } from '../layout'

const TeamContainer = () => {
  const [ currentTeam, setCurrentTeam ] = useState(0)


  const handleChange = (e) => {
    if(e.target.value > team.length){
      setCurrentTeam(team.length)
    } else {
      setCurrentTeam(parseInt(e.target.value))
    }
  }


  return (
    <div className="column-center w-100 team-container">
      <div className='row-center'>
        {team
          .slice(currentTeam, currentTeam + 5)
          .map((member, index) => <TeamMember key={`${member.first_name} ${member.last_name}`} member={member} />)
        }
      </div>
      <div className='row-center g-pt5 mtb-2'>
        {team.slice(0, Math.ceil(team.length / 5)).map((element, index) =>
          <TeamCarouselButton key={index * 5} handleChange={handleChange} isActive={currentTeam === index * 5} currentTeam={index} />)
        }
      </div>
    </div>
    )
}

export default TeamContainer
