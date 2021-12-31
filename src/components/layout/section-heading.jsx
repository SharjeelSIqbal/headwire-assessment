import clsx from 'clsx'

const SectionHeading = ({ children, className }) => (
 <h1 className={clsx(className, 'mt-pt5 mb-1 titillium section-heading')}>
    {children}
  </h1>
)

export default SectionHeading
