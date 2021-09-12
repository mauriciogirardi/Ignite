import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  activeClassName: string
  name: string
}

export function ActiveLink({
  activeClassName,
  name,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ''

  return (
    <Link {...rest} passHref>
      <a className={className}>{name}</a>
    </Link>
  )
}
