import Head from 'next/head'

export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Zach Cullen | Software Engineer | Front End Web Developer </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>
          Zach Cullen
        </h1>

        <p className='description'>
          Software Engineer
        </p>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </div>
  )
}
