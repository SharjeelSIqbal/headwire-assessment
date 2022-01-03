const TeamCarouselButton = ({ handleChange, isActive }) => {
  const active = isActive ? 'circle-transparent-active' : 'circle-transparent-inactive'
  return (
    <button onClick={handleChange} className={`${active} circle p-0 m-0 circle-transparent-active row-center relative`}>
      <span className='circle-center circle' />
    </button>
  )
}

export default TeamCarouselButton
