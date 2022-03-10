import Link from 'next/link';
1;
import Head from 'next/head';

function HomePage() {
  return (
    <>
      <Head>
        <title>yyfabulous</title>
        <meta name="viewport" property="og:title" key="yyfabulous的demo" content="yyfabulous的content" />
      </Head>
      <div className="text-3xl font-bold underline">
        <Link href={'/about'}>Welcome to Next.js!</Link>
      </div>
    </>
  );
}

export default HomePage;
