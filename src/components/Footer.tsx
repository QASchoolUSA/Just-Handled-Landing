import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Just Handled</span>
                        <p>Accounting Built for Trucking.</p>
                    </div>

                    <div className={styles.links}>
                        <Link href="#">Features</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Login</Link>
                        <Link href="#">Contact</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Just Handled. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
