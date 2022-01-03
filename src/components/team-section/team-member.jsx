import { BracketHeading, SectionSubHeading } from '../layout'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1A1A1A',
    color: 'whitesmoke',
    border: 'none',
    borderRadius: '0',
    maxWidth: '600px'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .25)'
  }
}

Modal.setAppElement('#root')

const TeamMember = ({ member }) => {

  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () =>  setIsModalOpen(false)

  return (
    <div className='team-member-card w-20 relative'>
      <div className='relative team-member-div'>
        <img className='w-100 team-member-grayscale team-member-img relative' src={member.profile_picture} alt={`${member.first_name} ${member.last_name}`} />
        <div className='team-additional-info' >
          <div className="column-center team-member-info uppercase white-text titillium" onClick={openModal}>
            <h2 className='m-0'>{`${member.first_name} ${member.last_name}`}</h2>
            <h2 className='m-0'><AiOutlinePlus /></h2>
          </div>
          <div className='team-member-title row-center'>
            <BracketHeading className='roboto team-title-size white-text uppercase'> {member.job_title} </BracketHeading>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel='Team Member Info Modal'
      >
        <div className='column team-modal-container relative'>
          <button onClick={closeModal} className='team-modal-close'>
            <AiOutlineClose />
          </button>
          <div className='column-center mtb-2'>
            <BracketHeading className='uppercase roboto'> {member.job_title} </BracketHeading>
            <SectionSubHeading className='section-heading white-text uppercase'>{`${member.first_name} ${member.last_name}`}</SectionSubHeading>
            <div className='border-dotted border-white' />
          </div>
          <div className='row-center g-2'>
            <div className='circle w-50 circle-img'>
              <img className='w-100 circle-img-profile' src={member.profile_picture} alt={`${member.first_name}  ${member.last_name}`} />
            </div>
          </div>
          <div className='column g-pt5 white-text lighter titillium'>
            <h2 className='lighter m-0'>Bio</h2>
            <div className='border-dotted border-white' />
            <p>{member.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TeamMember
