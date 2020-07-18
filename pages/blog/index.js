import Header from '../../components/header'
import Link from 'next/link'

const Blog = ({ posts }) => {
  const renderPosts = (posts) => {
    return posts.map((post) => {
      return (
        <li key={post.id}>
          <Link as={`blog/${post.id}`} href='/blog/[id]'>
            <a>{post.title}</a>
          </Link>
        </li>
      )
    })
  }
  return (
    <>
      <Header />
      <h1>Blog</h1>
      <h2>Posts</h2>
      <ul>
        {renderPosts(posts)}
      </ul>
    </>
  )
}

Blog.getInitialProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()

  return { posts }
}

export default Blog
