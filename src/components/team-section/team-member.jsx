import { BracketHeading } from '../layout'
import { AiOutlinePlus } from 'react-icons/ai'
const TeamMember = ({ member }) => {
  return (
    <div className='team-member-card w-20 relative'>
      <div>
        <div className='relative member-div'>
        <img className='w-100 grayscale member-img relative' src={member.profile_picture} alt={`${member.first_name} ${member.last_name}`} />
        <div className='additional-info'>
          <div className="column-center member-info white-text titillium">
            <h2 className='m-0'>{`${member.first_name.toUpperCase()} ${member.last_name.toUpperCase()}`}</h2>
              <h2 className='m-0'><AiOutlinePlus /></h2>
          </div>
          <div className='member-job-title row-center'>
            <BracketHeading className='roboto job-title-size white-text'> {member.job_title.toUpperCase()} </BracketHeading>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
