import Header from '../../components/header'
import Link from 'next/link'

export default () => {
  return (
    <>
      <Header />
      <h1>Blog</h1>
      <h2>Posts</h2>
      <ul>
        <li>
          <Link as='blog/1' href='/blog/[id]'>
            <a>First Post</a>
          </Link>
        </li>
        <li>
          <Link as='blog/2' href='/blog/[id]'>
            <a>Second Post</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
