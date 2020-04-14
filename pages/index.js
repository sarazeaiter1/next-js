import Link from "next/link";

const Home = () => (
  <div className="container">
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    <div>
      <p>Hello Next.js</p>
    </div>
  </div>
);

export default Home;
