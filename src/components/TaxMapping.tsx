import FadeIn from './FadeIn';
import { FileCheck, ShieldCheck, Banknote, ScrollText } from 'lucide-react';
import styles from './TaxMapping.module.css';

const textMappings = [
    { item: "Freight Revenue", form: "Schedule C, Line 1", icon: <Banknote size={20} /> },
    { item: "Fuel Costs", form: "Schedule C, Part II", icon: <FileCheck size={20} /> },
    { item: "Driver Wages", form: "Schedule C / W-2", icon: <ShieldCheck size={20} /> },
    { item: "Owner-Op Payments", form: "Form 1099-NEC", icon: <ScrollText size={20} /> },
    { item: "Factoring Fees", form: "Schedule C (Other)", icon: <FileCheck size={20} /> },
    { item: "Truck Assets", form: "Form 4562", icon: <Banknote size={20} /> },
];

export default function TaxMapping() {
    return (
        <section className={styles.section}>
            <div className="container">
                <FadeIn>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <h2 className={styles.title}>IRS-Ready <span className="text-gradient">Mapping</span></h2>
                            <p className={styles.subtitle}>
                                We don't just dump data. Every transaction is automatically mapped to the correct tax line item for trucking businesses.
                            </p>
                        </div>

                        <div className={styles.mappingGrid}>
                            {textMappings.map((map, idx) => (
                                <FadeIn key={idx} delay={idx * 0.1} className={styles.card}>
                                    <div className={styles.row}>
                                        <div className={styles.item}>
                                            <span className={styles.icon}>{map.icon}</span>
                                            <span className={styles.label}>{map.item}</span>
                                        </div>
                                        <div className={styles.arrow}>→</div>
                                        <div className={styles.form}>{map.form}</div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <div className={styles.footer}>
                            <p>Also handles: IFTA Filings, Payroll Taxes (941/940), and Depreciation Schedules.</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
