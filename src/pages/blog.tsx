import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import Navbar from '../components/Navbar';

export default function Blog({ posts }: any) {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
        <h1>All Posts</h1>
        <ul>
          {posts.map((post: any) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                {post.frontmatter.title} – {post.frontmatter.date}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
