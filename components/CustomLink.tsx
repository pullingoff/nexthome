import Link from 'next/link'
import {HTMLProps} from 'react'

type LinkProps = {
  href : string,
  children: React.ReactNode,
  rest? : HTMLProps<HTMLAnchorElement>,
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>,
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>,
}

const CustomLink = ({ href, children, ...rest} :LinkProps) => {
  
  return (
    <Link href={href} passHref>
      <a {...rest}>
        {children}
      </a>
    </Link>
  )
}

export default CustomLink