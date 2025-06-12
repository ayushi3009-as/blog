import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>This blog is built with Next.js and CSS Modules!</p>
      </main>
    </>
  );
}
