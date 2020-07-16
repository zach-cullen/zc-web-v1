import {useRouter} from 'next/router'

import Header from '../../../components/header'

const BlogPost = ({ title, body}) => {
  const router = useRouter()
  const id = router.query.id
  
  return(
    <>
      <Header />
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  )
}

BlogPost.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
  const post = res.json()
  return post
}

export default BlogPost