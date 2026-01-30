import FadeIn from './FadeIn';
import { Truck, DollarSign, Scale, FileText, FileBarChart, Users } from 'lucide-react';
import styles from './FeatureGrid.module.css';

const features = [
    {
        title: "Trucking-Specific Categorization",
        description: "Every transaction classified correctly—Freight Revenue, Fuel Surcharges, Driver Pay, and Maintenance. No generic buckets.",
        icon: <Truck size={32} />
    },
    {
        title: "Smart Factoring Management",
        description: "We separate cash advances from true revenue. Track Invoices vs. Cash Received vs. Fees automatically.",
        icon: <DollarSign size={32} />
    },
    {
        title: "Monthly Reconciliation",
        description: "Bank ledger matched to statements every month. Resolve fees, timing differences, and pending items instantly.",
        icon: <Scale size={32} />
    },
    {
        title: "Audit-Ready Documentation",
        description: "Attach invoices, fuel receipts, and PODs directly to transactions. Your business is always ready for a CPA review.",
        icon: <FileText size={32} />
    },
    {
        title: "Tax-Ready Reporting",
        description: "Reports are mapped to IRS categories (Schedule C / 1120). Maximize depreciation and deductions legally.",
        icon: <FileBarChart size={32} />
    },
    {
        title: "Driver & Payroll Records",
        description: "Track driver settlements, owner-operator statements, and 1099-NEC data in one centralized system.",
        icon: <Users size={32} />
    }
];

export default function FeatureGrid() {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <FadeIn>
                    <h2 className={styles.title}>The Complete <span className="text-gradient">Financial Framework</span></h2>
                    <p className={styles.subtitle}>Designed specifically for the complexities of trucking operations.</p>
                </FadeIn>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.1} className={styles.card}>
                            <div className={styles.iconWrapper}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
