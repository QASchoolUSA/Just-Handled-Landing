import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/just-handled-logo.svg"
            alt="Just Handled Logo"
            width={300}
            height={75}
            priority
            style={{ width: 'auto', height: '50px' }} // Constraint scale by height to avoid breaking navbar
          />
        </Link>

        <div className={styles.links}>
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How It Works</Link>
          <Link href="#pricing">Pricing</Link>
        </div>

        <div className={styles.actions}>
          <a href="https://app.justhandled.com" className="btn btn-primary">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
