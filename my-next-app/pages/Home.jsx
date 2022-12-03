import Link from 'next/link';

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/my/Account'}>About Us</Link>
        </li>
        <li>
          <Link href={'/my/Info'}>Blog Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
