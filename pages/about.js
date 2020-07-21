import { Heading } from '@chakra-ui/core'
import Header from '../components/Header'
import PageSection from '../components/PageSection'

export default () => {
  return (
    <>
      <Header />
      <PageSection>
        <Heading as='h1' size='xl'>About</Heading>
      </PageSection>
    </>
  )
}
