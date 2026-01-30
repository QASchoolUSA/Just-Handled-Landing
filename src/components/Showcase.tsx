import Image from 'next/image';
import styles from './Showcase.module.css';

const screenshots = [
    { src: '/assets/app-screenshot-1.png', label: 'Health Check Dashboard' },
    { src: '/assets/app-screenshot-2.png', label: 'Weekly Settlement Wizard' },
    { src: '/assets/app-screenshot-3.png', label: 'Driver Profiles' },
];

export default function Showcase() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>See It in <span className="text-gradient">Action</span></h2>

                <div className={styles.gallery}>
                    {screenshots.map((shot, index) => (
                        <div key={index} className={styles.imageCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={shot.src}
                                    alt={shot.label}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, 800px"
                                />
                            </div>
                            <p className={styles.caption}>{shot.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
