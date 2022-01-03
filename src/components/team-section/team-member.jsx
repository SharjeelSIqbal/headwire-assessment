import { BracketHeading } from '../layout'
import { AiOutlinePlus } from 'react-icons/ai'

const TeamMember = ({ member }) => {

  return (
    <div className='team-member-card w-20 relative'>
      <div className='relative team-member-div'>
        <img className='w-100 team-member-grayscale team-member-img relative' src={member.profile_picture} alt={`${member.first_name} ${member.last_name}`} />
        <div className='team-additional-info'>
          <div className="column-center team-member-info uppercase white-text titillium">
            <h2 className='m-0'>{`${member.first_name} ${member.last_name}`}</h2>
            <h2 className='m-0'><AiOutlinePlus /></h2>
          </div>
          <div className='team-member-title row-center'>
            <BracketHeading className='roboto team-title-size white-text uppercase'> {member.job_title} </BracketHeading>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
