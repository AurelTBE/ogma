import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Text To Speech - Actus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex flex-1 items-center justify-center contentglass">
          <h1 className="flex text-stone-800 p-60 text-2xl">
            Actus
          </h1>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
