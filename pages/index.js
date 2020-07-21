import Header from '../components/Header'
import { Heading, Text } from '@chakra-ui/core'
import PageSection from '../components/PageSection'

export default () => {
  return (
    <>
      <Header />
      <PageSection>
        <Heading as='h1' size='xl'>Hi, I'm Zach Cullen</Heading>
        <Text my='4'>
          A Software Engineer with a background in video production and web design. Join me as I explore the frontiers of modern web app development using React & JavaScript.
        </Text>
      </PageSection>
      <PageSection sectionBg='gray.50'>
        <Heading as='h2' size='lg'>
          Projects
        </Heading>
      </PageSection>
      <PageSection>
        <Heading as='h2' size='lg'>
          Posts
        </Heading>
      </PageSection>
    </>
  )
}
