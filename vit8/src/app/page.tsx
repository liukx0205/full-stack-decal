'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles/globals.module.css';

// HINT: Use the `usePathname` hook to get the current pathname.
// HINT: Use the `clsx` utility to conditionally apply the 'dark-mode' class.
// HINT: There should also be two new pages we are redirecting to. Think about how we make more pages within Next.js.

function Home() {
  const pathname = usePathname();
  const isDarkMode = pathname === '/dark-mode';

  return (
    <div className={`${styles.container} ${isDarkMode ? styles['dark-mode'] : ''}`}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <Link href="/dark-mode"><button>Dark-Mode</button></Link>
      <Link href="/light-mode"><button>Light-Mode</button></Link>
    </div>
  );
}

export default Home;
