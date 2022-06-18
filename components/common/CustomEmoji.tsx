import { ReactNode } from 'react';

const CustomEmoji = ({
  aria,
  children,
}: {
  aria: string;
  children: ReactNode;
}) => {
  return (
    <span role="img" aria-label={aria}>
      {children}
    </span>
  );
};

export default CustomEmoji;
