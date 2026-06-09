import { useState, useEffect } from 'react';
import Logo from '@/assets/icons/logo.svg?react';
import styles from './Header.module.scss';

interface NavLink {
  label: string;
  href: string;
  hasArrow?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#' },
  { label: 'Speakers', href: '#' },
  { label: 'Schedule', href: '#' },
  { label: 'Location', href: '#' },
];

const menuLinks: NavLink[] = [
  ...navLinks,
  { label: 'Artists', href: '#' },
  { label: 'Multipass', href: '#' },
  { label: 'Prices', href: '#' },
  { label: 'Sponsors', href: '#', hasArrow: true },
  { label: 'FAQ', href: '#', hasArrow: true },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(`.${styles.menu}`) && !target.closest(`.${styles.burger}`)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.isScrolled : ''}`.trim()}>
      <div className={styles.backdrop}></div>

      <div className={styles.inner}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.item}>
                <a className={styles.link} href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`${styles.burger} ${isOpen ? styles.isOpen : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}>
          <span></span><span></span><span></span><span></span>
        </button>
      </div>

      <div className={`${styles.menu} ${isOpen ? styles.isOpen : ''}`}>
        <ul className={styles.menuList}>
          {menuLinks.map((link) => (
            <li key={link.label} className={styles.menuItem}>
              <a
                className={`${styles.link} ${styles.menuLink} ${link.hasArrow ? styles.withArrow : ''}`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

