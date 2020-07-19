import NextLink from 'next/link'
import { Link } from '@chakra-ui/core'

export default () => (
  <header>
    <NextLink href='/'>
      <Link>Home</Link>
    </NextLink>
    <NextLink href='/about'>
      <Link>About</Link>
    </NextLink>
    <NextLink href='/blog'>
      <Link>Blog</Link>
    </NextLink>
  </header>
)
