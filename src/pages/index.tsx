// src/pages/index.tsx
import { useState } from 'react';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import Navbar from '@/components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home({ posts }: any) {
  const [search, setSearch] = useState('');

  const filteredPosts = posts.filter((post: any) =>
    post.frontmatter.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>My Blog</h1>

        <input
          type="text"
          placeholder="Search posts..."
          className={styles.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className={styles.postList}>
          {filteredPosts.map((post: any) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
