import Header from '../components/header'
import { Heading, Box } from '@chakra-ui/core'

export default () => {
  return (
    <Box maxW='960px' m='0 auto'>
      <Header />
      <Heading as='h1' size='xl'>Hi, I'm Zach Cullen</Heading>
      <p>
        A Software Engineer with a background in video production and web design. Join me as I explore the frontiers of modern web app development using React & JavaScript.
      </p>
    </Box>
  )
}
