import Navbar from '../../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Contact</h1>
        <p>You can reach us at: <a href="mailto:your@email.com">your@email.com</a></p>
      </main>
    </>
  );
}
