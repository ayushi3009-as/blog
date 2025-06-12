// src/pages/posts/[slug].tsx
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Post.module.css';

export default function PostPage({ post }: any) {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.content}</p>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}
