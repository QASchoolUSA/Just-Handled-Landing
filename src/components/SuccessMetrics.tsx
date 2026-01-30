import { TrendingUp, Clock, ShieldCheck } from 'lucide-react';
import styles from './SuccessMetrics.module.css';
import FadeIn from './FadeIn';

export default function SuccessMetrics() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <FadeIn direction="up">
                        <h2 className={styles.title}>Results You Can <span className="text-gradient">Bank On</span></h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className={styles.subtitle}>Stop worrying about bookkeeping and start focusing on profitability.</p>
                    </FadeIn>
                </div>

                <div className={styles.grid}>
                    <FadeIn delay={0.3} className={styles.card}>
                        <div className={styles.iconWrapper}><Clock size={32} /></div>
                        <h3 className={styles.metric}>10+ Hrs</h3>
                        <p className={styles.label}>Saved Weekly</p>
                        <p className={styles.desc}>No more manual entry. We sync directly with your bank and factoring.</p>
                    </FadeIn>

                    <FadeIn delay={0.4} className={styles.card}>
                        <div className={styles.iconWrapper}><ShieldCheck size={32} /></div>
                        <h3 className={styles.metric}>100%</h3>
                        <p className={styles.label}>Tax Ready</p>
                        <p className={styles.desc}>Books are reconciled daily so you're always ready for tax season or a loan.</p>
                    </FadeIn>

                    <FadeIn delay={0.5} className={styles.card}>
                        <div className={styles.iconWrapper}><TrendingUp size={32} /></div>
                        <h3 className={styles.metric}>$5k+</h3>
                        <p className={styles.label}>Found Deductions</p>
                        <p className={styles.desc}>Our system catches expenses you might miss, lowering your tax bill.</p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
