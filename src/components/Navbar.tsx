'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">My Blog</Link>
      </div>

      <button onClick={toggleMenu} className={styles.hamburger}>
        ☰
      </button>

      <ul
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.showMenu : ''
        }`}
      >
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>

        <li className={styles.dropdown}>
          <span>Categories ▾</span>
          <ul className={styles.dropdownContent}>
            <li><Link href="/category/tech">Tech</Link></li>
            <li><Link href="/category/lifestyle">Lifestyle</Link></li>
            <li><Link href="/category/tutorials">Tutorials</Link></li>
          </ul>
        </li>

        <li>
          <input
            className={styles.search}
            type="text"
            placeholder="Search posts..."
          />
        </li>

        <li>
          <button onClick={toggleTheme} className={styles.toggle}>
            {darkMode ? '🌞' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
