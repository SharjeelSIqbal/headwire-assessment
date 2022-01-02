import '../css/founder.css'

const Founder = () => (
  <div id='#founder' className='founder-background ptb-4 row-center'>
    <div className='founder-z w-container flex g-3 white-text relative'>
      <h2 className='m-0 w-50 titillium founder-quote text-align-right'>
        "Even if you don't have a ready sketch of what you
        want &ndash; we will help you get the result you
        dream of."
      </h2>
      <div className='flex g-1 w-50'>
        <div className='flex align-center'>
          <img className='founder-image' src='/imgs/founder-of-company.png' alt='Founder of Company David Oswald' />
        </div>
        <div className='white-text column justify-center'>
          <h3 className='m-0 titillium'>David Oswald</h3>
          <h5 className='titillium lighter m-0 pt-pt5 relative'>
            <span>FOUNDER OF COMPANY</span>
            <div className='delafield founder-signature'>
              Oswald
            </div>
          </h5>
        </div>
      </div>
    </div>
  </div>
)

export default Founder
