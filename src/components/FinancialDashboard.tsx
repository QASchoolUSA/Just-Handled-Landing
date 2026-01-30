import { TrendingUp, CheckCircle, AlertCircle, DollarSign, PieChart } from 'lucide-react';
import styles from './FinancialDashboard.module.css';

export default function FinancialDashboard() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <div className={styles.welcome}>
                    <h3>Financial Health</h3>
                    <p>Updated: Today, 9:41 AM</p>
                </div>
                <div className={styles.status}>
                    <span className={styles.statusDot}></span>
                    Tax Ready
                </div>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}><TrendingUp size={20} /></div>
                    <div className={styles.statInfo}>
                        <p>Net Profit</p>
                        <h4>$12,450</h4>
                        <span className={styles.positive}>+8.2%</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}><DollarSign size={20} /></div>
                    <div className={styles.statInfo}>
                        <p>Tax Savings</p>
                        <h4>$3,200</h4>
                        <span className={styles.positive}>Est.</span>
                    </div>
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.chartArea}>
                    <div className={styles.chartHeader}>
                        <h4>Expense Breakdown</h4>
                        <select className={styles.select}>
                            <option>This Month</option>
                        </select>
                    </div>
                    <div className={styles.bars}>
                        <div className={styles.barGroup}>
                            <div className={styles.barLabel}>Fuel</div>
                            <div className={styles.barBg}><div className={styles.barFill} style={{ width: '65%' }}></div></div>
                            <div className={styles.barValue}>$4.2k</div>
                        </div>
                        <div className={styles.barGroup}>
                            <div className={styles.barLabel}>Maint.</div>
                            <div className={styles.barBg}><div className={styles.barFill} style={{ width: '35%' }}></div></div>
                            <div className={styles.barValue}>$1.8k</div>
                        </div>
                        <div className={styles.barGroup}>
                            <div className={styles.barLabel}>Ins.</div>
                            <div className={styles.barBg}><div className={styles.barFill} style={{ width: '25%' }}></div></div>
                            <div className={styles.barValue}>$1.2k</div>
                        </div>
                    </div>
                </div>

                <div className={styles.actionItems}>
                    <h4>Action Items</h4>
                    <div className={styles.item}>
                        <CheckCircle size={18} className={styles.check} />
                        <span>Upload Fuel Receipts</span>
                    </div>
                    <div className={styles.item}>
                        <AlertCircle size={18} className={styles.alert} />
                        <span>Review Uncategorized (2)</span>
                    </div>
                    <div className={styles.item}>
                        <CheckCircle size={18} className={styles.check} />
                        <span>Approve Monthly Report</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
