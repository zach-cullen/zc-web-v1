import Header from '../../components/header'
import NextLink from 'next/link'
import { Box, Link, Heading } from '@chakra-ui/core'

const Blog = ({ posts }) => {
  const renderPosts = (posts) => {
    return posts.map((post) => {
      return (
        <li key={post.id}>
          <NextLink as={`blog/${post.id}`} href='/blog/[id]'>
            <Link>{post.title}</Link>
          </NextLink>
        </li>
      )
    })
  }
  return (
    <>
      <Header />
      <Box
        maxW='720px'
        m='0 auto'
      >
        <Heading as='h1' fontSize={['2xl', '4xl']}>Blog</Heading>
        <Heading as='h2' fontSize={['lrg', '2xl']}>Posts</Heading>
        <ul>
          {renderPosts(posts)}
        </ul>
      </Box>
    </>
  )
}

Blog.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { posts }
}

export default Blog
