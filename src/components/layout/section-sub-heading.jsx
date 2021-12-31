import clsx from 'clsx'

const SectionSubHeading = ({ children, className }) => (
  <h1 className={clsx(className, 'mt-pt5 mb-1 titillium')}>
    {children}
  </h1>
)

export default SectionSubHeading
