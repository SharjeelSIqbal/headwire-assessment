import TeamMember from './team-member'
import team from '../sample.json'
import { useState } from 'react'

const TeamContainer = () => {
  const [ currentTeam, setCurrentTeam ] = useState(0);
  const handleChange = (e) => {
    if(e.target.value > team.length){
      setCurrentTeam(team.length)
    } else {
      setCurrentTeam(e.target.value)
    }
  }

  return (
    <div className="column-center w-100 team-container mtb-container">
      <div className='row-center'>
        {team
          .slice(currentTeam, currentTeam + 5)
          .map((member, index) => <TeamMember key={`${member.first_name} ${member.last_name}`} member={member} />)}
      </div>
      <div className='row-center g-pt5 mtb-2'>
        {team.slice(0, Math.ceil(team.length / 5)).map((element, index) => (
          <button onClick={handleChange} key={index * 5} value={index * 5} className='circle p-0 m-0 circle-transparent-active row-center relative'>
            <span className='circle-center circle' />
          </button>
          )
        )}
      </div>
    </div>
    )
}

export default TeamContainer
