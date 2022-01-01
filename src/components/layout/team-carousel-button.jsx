import clsx from 'clsx'

const TeamCarouselButton = ({ handleChange, isActive, currentTeam }) => {
  const active = isActive ? 'circle-transparent-active' : 'circle-transparent-inactive'
  return (
  <button onClick={handleChange} value={currentTeam * 5} className={`${active} circle p-0 m-0 circle-transparent-active row-center relative`}>
    <span className='circle-center circle' />
  </button>
  )
}

export default TeamCarouselButton
