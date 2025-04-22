import { motion } from 'framer-motion';
import { Link as ScrollLink, Events } from 'react-scroll';
import { useEffect, useState } from 'react';
import { sections } from '../../data';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [active, setActive] = useState<string>('Inicio');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul>
        {sections.map((section) => (
          <motion.li
            key={section}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.navlinks}
          >
            <ScrollLink
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className={`${styles.navlinks} ${active === section ? styles.active : ''}`}

            >
              {section}
            </ScrollLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}