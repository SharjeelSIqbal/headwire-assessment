import TeamMember from './team-member'
import team from '../sample.json'



const sampleTeam = [team[0], team[1], team[2], team[3], team[4]]

const TeamContainer = () => {
  return(
    <>
    <div className="w-100 team-container row-center mtb-container">
      {sampleTeam.map(member => <TeamMember member={member} />)}
    </div>
    </>
    )
}

export default TeamContainer
