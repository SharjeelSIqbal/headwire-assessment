const Founder = () => (
  <div className='founder-section row-center'>
    <div className="founder-container flex g-3 white-text relative">
        <h2 className='m-0 w-50 lighter titillium founder-quote text-align-right'>
          "Even if you don't have a ready sketch of what you
          want &mdash; we will help you get the result you
          dream of."
        </h2>
      <div className="flex g-1 w-50">
        <div className='flex align-center'>
          <img className='founder-image' src="/imgs/founder-of-company.png" alt="Founder of Company David Oswald" />
        </div>
        <div className="white-text column justify-center">
          <h3 className="m-0 titillium">David Oswald</h3>
          <h5 className='titillium lighter m-0 pt-half'>FOUNDER OF COMPANY</h5>
        </div>
          <svg className='delafield founder-signature founder-signature-div' viewBox='0 0 250 80' xmlns='http://www.w3.org/2000/svg'>
            <text x='10' y='60' className=''>
              Oswald
            </text>
          </svg>
      </div>
    </div>
  </div>
)

export default Founder
