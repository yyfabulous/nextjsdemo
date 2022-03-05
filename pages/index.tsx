import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <Link href={'/about'}>Welcome to Next.js!</Link>
    </div>
  );
}

export default HomePage;
