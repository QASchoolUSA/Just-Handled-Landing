import styles from './Workflow.module.css';

export default function Workflow() {
    return (
        <section id="how-it-works" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>From Upload to <span className="text-gradient">Audit-Ready</span></h2>
                <p className={styles.subtitle}>Stop wrestling with spreadsheets. Just upload the basics, and let our system handle the complex accounting logic.</p>

                <div className={styles.workflowGrid}>
                    {/* Input Side */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.icon}>📤</span>
                            <h3>What You Upload</h3>
                        </div>
                        <ul className={styles.list}>
                            <li>Bank Statements & Activity</li>
                            <li>Factoring Statements</li>
                            <li>Load Rate Confirmations</li>
                            <li>Fuel & Expense Receipts</li>
                            <li>Driver Settlements</li>
                        </ul>
                    </div>

                    {/* Connection */}
                    <div className={styles.connector}>
                        <div className={styles.arrow}>➔</div>
                    </div>

                    {/* Output Side */}
                    <div className={`${styles.card} ${styles.cardPrimary}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.icon}>⚡</span>
                            <h3>Just Handled Automates</h3>
                        </div>
                        <ul className={styles.list}>
                            <li>✔ Classifies Transactions automatically</li>
                            <li>✔ Reconciles Factoring Fees correctly</li>
                            <li>✔ Tracks Trucking-Specific Expenses</li>
                            <li>✔ Generates P&L and Balance Sheets</li>
                            <li>✔ Prepares Tax-Ready Reports</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
