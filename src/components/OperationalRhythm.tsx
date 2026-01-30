import FadeIn from './FadeIn';
import { CalendarCheck, Clock, CalendarDays } from 'lucide-react';
import styles from './OperationalRhythm.module.css';

const stages = [
    {
        title: "Daily / Ongoing",
        icon: <Clock size={28} />,
        color: "blue",
        tasks: [
            "Upload or sync bank transactions",
            "Upload factoring statements",
            "Attach documents (fuel, repairs)",
            "Classify new transactions"
        ]
    },
    {
        title: "Weekly Review",
        icon: <CalendarDays size={28} />,
        color: "green",
        tasks: [
            "Review uncategorized transactions",
            "Verify factoring receipts vs invoices",
            "Review fuel & maintenance spending",
            "Check driver payroll accuracy"
        ]
    },
    {
        title: "Monthly Close",
        icon: <CalendarCheck size={28} />,
        color: "purple",
        tasks: [
            "Complete bank reconciliation",
            "Review factoring fees vs agreements",
            "Review accounts receivable",
            "Lock accounting period"
        ]
    }
];

export default function OperationalRhythm() {
    return (
        <section className={styles.section}>
            <div className="container">
                <FadeIn>
                    <div className={styles.header}>
                        <h2 className={styles.title}>The <span className="text-gradient">Operational Rhythm</span></h2>
                        <p className={styles.subtitle}>
                            We impose structure on the chaos. From daily uploads to the monthly close, every step is designed for audit-readiness.
                        </p>
                    </div>
                </FadeIn>

                <div className={styles.timeline}>
                    {stages.map((stage, index) => (
                        <FadeIn key={index} delay={index * 0.2} className={styles.stageCard}>
                            <div className={`${styles.iconBox} ${styles[stage.color]}`}>
                                {stage.icon}
                            </div>
                            <h3 className={styles.stageTitle}>{stage.title}</h3>
                            <ul className={styles.taskList}>
                                {stage.tasks.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
