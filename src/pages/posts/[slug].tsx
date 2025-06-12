import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Navbar from '../../../components/Navbar';

export default function PostPage({ frontmatter, content }: any) {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
        <h1>{frontmatter.title}</h1>
        <p style={{ color: 'gray' }}>{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', params.slug + '.md'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      frontmatter,
      content: contentHtml,
    },
  };
}
