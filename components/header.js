import NextLink from 'next/link'
import { Flex, Box, Button } from '@chakra-ui/core'
import PageSection from './PageSection'

export default () => (
  <header>
    <PageSection>
      <Flex
        justify='space-between'
      >
        <Box area='logo'>
          <NextLink href='/'>
            <Button variant='outline' variantColor='gray'>
              <b>Z</b>
            </Button>
          </NextLink>
        </Box>
        <Box area='links'>
          <NextLink href='/about'>
            <Button variant='ghost'>
              About
            </Button>
          </NextLink>
          <NextLink href='/blog'>
            <Button variant='ghost'>
              Blog
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </PageSection>
  </header>
)
