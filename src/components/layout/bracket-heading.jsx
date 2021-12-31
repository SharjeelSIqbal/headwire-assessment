import clsx from 'clsx'

const BracketHeading = ({ children, className }) => (
  <h5 className={clsx(className, 'bracket-heading bold roboto')}>
    {children}
  </h5>
);

export default BracketHeading;
