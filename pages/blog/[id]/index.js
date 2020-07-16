import {useRouter} from 'next/router';

import Header from '../../../components/header'

export default () => {
  const router = useRouter();
  const id = router.query.id;
  
  return(
    <>
      <Header />
      <h1>Post {id}</h1>
    </>
  );
};