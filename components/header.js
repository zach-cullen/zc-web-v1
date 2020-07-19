import NextLink from 'next/link'
import { Flex, Box, Heading, Link } from '@chakra-ui/core'

export default () => (
  <header>
    <Flex
      maxW='720px'
      m='0 auto'
      py='4'
      justify='space-between'
    >
      <Box area='logo'>
        <Heading as='h5' fontSize='2xl'>Zc</Heading>
      </Box>
      <Box area='links'>
        <NextLink href='/'>
          <Link>Home</Link>
        </NextLink>
        <NextLink href='/about'>
          <Link>About</Link>
        </NextLink>
        <NextLink href='/blog'>
          <Link>Blog</Link>
        </NextLink>
      </Box>
    </Flex>
  </header>
)
