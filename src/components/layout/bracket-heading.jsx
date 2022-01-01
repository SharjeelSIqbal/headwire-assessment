import clsx from 'clsx'

const BracketHeading = ({ children, className }) => (
  <h5 className={clsx(className, 'm-0 gray-text bracket-heading bold')}>
    [{children}]
  </h5>
);

export default BracketHeading;
