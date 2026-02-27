import FadeIn from './FadeIn';
import FinancialDashboard from './FinancialDashboard';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <FadeIn direction="up">
                        <h1 className={styles.title}>
                            Accounting Built for Trucking. <br />
                            <span className="text-gradient">Always Tax-Ready.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className={styles.subtitle}>
                            We turn your bank statements and factoring activity into clean, accurate financial reports—automatically. Keep your books audit-ready without the paperwork.
                        </p>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4}>
                        <div className={styles.ctaGroup}>
                            <a href="https://app.justhandled.com" className="btn btn-primary">
                                Get Started
                            </a>
                            <a href="#how-it-works" className="btn btn-secondary">
                                See How It Works
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={0.6} className={styles.visual}>
                    <div className={styles.dashboardWrapper}>
                        <div className={styles.glow} />
                        <FinancialDashboard />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
