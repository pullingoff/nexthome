import Link from 'next/link'
import {HTMLProps} from 'react'


const CustomLink = ({ href, children, ...rest} : HTMLProps<HTMLAnchorElement>) => {
  // const isInternalLink = href && href.startsWith('/')
  // const isAnchorLink = href && href.startsWith('#')

  // if (isAnchorLink) {
  //   return <a href={href} {...rest} />
  // }

  // if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...rest}>
          {children}
        </a>
      </Link>
    )
  // }

  // return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink