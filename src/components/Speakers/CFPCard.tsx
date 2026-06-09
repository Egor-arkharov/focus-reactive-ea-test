import styles from './Speakers.module.scss';

export const CFPCard = () => (
  <div className={`${styles.gridItem} ${styles.cfpCard}`}>
    <h3 className={styles.cfpTitle}>CFP <br />Is Open</h3>
    <p className={styles.cfpDate}>Until March 31</p>
    <button className={styles.cfpButton}>Submit Proposal</button>
  </div>
);