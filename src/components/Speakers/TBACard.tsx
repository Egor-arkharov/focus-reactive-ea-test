import styles from './Speakers.module.scss';
import Tba1 from '@/assets/icons/tba-1.svg?react';
import Tba2 from '@/assets/icons/tba-2.svg?react';

interface Props {
  index: number;
}

export const TBACard = ({ index }: Props) => {
  const Icon = index % 2 === 0 ? Tba1 : Tba2;

  return (
    <div className={`${styles.gridItem} ${styles.tbaCard}`}>
      <div className={styles.tbaIcon}>
        <Icon />
      </div>
      <p className={styles.tbaText}>TO BE ANNOUNCED SOON</p>
    </div>
  );
};