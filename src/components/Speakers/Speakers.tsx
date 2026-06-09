import { CFPCard } from './CFPCard';
import { SpeakerCard } from './SpeakerCard';
import { TBACard } from './TBACard';
import { SPEAKERS_DATA } from './speakersData';
import styles from './Speakers.module.scss';

const TOTAL_SLOTS = 8;
// В макете сказано про число 11, я не понял как так, если в макете их всего 8.

export const Speakers = () => {
  const emptySlotsCount = Math.max(0, TOTAL_SLOTS - SPEAKERS_DATA.length - 1);

  return (
    <section className={`section ${styles.speakers}`}>
      <h2 className="section__title">Speakers</h2>

      <div className={styles.grid}>
        <CFPCard />

        {SPEAKERS_DATA.map((item) => (
          <SpeakerCard key={item.id} data={item} />
        ))}

        {Array.from({ length: emptySlotsCount }).map((_, i) => (
          <TBACard key={`tba-${i}`} index={i} />
        ))}
      </div>
    </section>
  );
};