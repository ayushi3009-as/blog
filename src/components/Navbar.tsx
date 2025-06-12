'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">My Blog</Link>
      </div>

      <button
        onClick={toggleMenu}
        className={styles.hamburger}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
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

        <li className={styles.searchItem}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search posts..."
            aria-label="Search"
          />
        </li>

        <li>
          <button onClick={toggleTheme} className={styles.toggle} aria-label="Toggle theme">
            {darkMode ? '🌞' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
