import {useRouter} from 'next/router'
import { Heading } from '@chakra-ui/core'
import Header from '../../../components/Header'
import PageSection from '../../../components/PageSection'

const BlogPost = ({ title, body}) => {
  const router = useRouter()
  const id = router.query.id
  
  return(
    <>
      <Header />
      <PageSection>
        <Heading as='h1' size='xl'>{title}</Heading>
        <p>{body}</p>
      </PageSection>
    </>
  )
}

BlogPost.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
  const post = res.json()
  return post
}

export default BlogPost