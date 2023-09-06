import Link from 'next/link';
import { HTMLProps } from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  rest?: HTMLProps<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
};

const CustomLink = ({ href, children, target, ...rest }: LinkProps) => {
  return (
    <Link href={href} passHref target={target} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
