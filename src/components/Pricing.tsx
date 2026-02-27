import FadeIn from './FadeIn';
import { Clock, Phone, CheckCircle2 } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <section id="pricing" className={styles.section}>
            <div className="container">
                <FadeIn>
                    <h2 className={styles.title}>Simple, Transparent <span className="text-gradient">Pricing</span></h2>
                    <p className={styles.subtitle}>Start with a risk-free trial. After your trial, our team will provide a custom pricing plan tailored to your business needs.</p>
                </FadeIn>

                <div className={styles.grid}>
                    {/* Free Trial Card */}
                    <FadeIn delay={0.1} className={styles.card}>
                        <div className={styles.badge}>New Accounts</div>
                        <div className={styles.iconWrapper}>
                            <Clock size={32} />
                        </div>
                        <h3 className={styles.pricingTitle}>7-Day Free Trial</h3>
                        <div className={styles.price}>
                            $0
                        </div>
                        <p className={styles.priceSmall}>for your first 7 days</p>

                        <ul className={styles.featuresList}>
                            <li>
                                <CheckCircle2 size={20} className={styles.checkIcon} />
                                <span>Full access to all platform features</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} className={styles.checkIcon} />
                                <span>Trucking-specific categorization</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} className={styles.checkIcon} />
                                <span>No commitment required</span>
                            </li>
                        </ul>

                        <div className={styles.buttonWrapper}>
                            <a href="https://app.justhandled.com/register" className="btn btn-primary" style={{ width: '100%' }}>
                                Start Free Trial
                            </a>
                        </div>
                    </FadeIn>

                    {/* Custom Pricing Card */}
                    <FadeIn delay={0.2} className={`${styles.card} ${styles.cardFeatured}`}>
                        <div className={styles.badge}>Paid Subscription</div>
                        <div className={styles.iconWrapper}>
                            <Phone size={32} />
                        </div>
                        <h3 className={styles.pricingTitle}>Custom Pricing</h3>
                        <div className={styles.price}>
                            Tailored
                        </div>
                        <p className={styles.priceSmall}>based on your business</p>

                        <ul className={styles.featuresList}>
                            <li>
                                <CheckCircle2 size={20} className={styles.checkIcon} />
                                <span>Continued access after trial</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} className={styles.checkIcon} />
                                <span>Pricing built for your specific fleet size</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} className={styles.checkIcon} />
                                <span>Dedicated support & onboarding</span>
                            </li>
                        </ul>

                        <div className={styles.buttonWrapper}>
                            <a href="mailto:support@justhandled.com" className="btn btn-secondary" style={{ width: '100%' }}>
                                Contact Support
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
