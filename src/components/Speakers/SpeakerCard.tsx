import styles from './Speakers.module.scss';
import type { Speaker, Socials } from './types.ts';

import SocialInstagram from '@/assets/icons/social-instagram.svg?react';
import SocialTwitter from '@/assets/icons/social-twitter.svg?react';
import SocialFacebook from '@/assets/icons/social-facebook.svg?react';
import SocialYoutube from '@/assets/icons/social-youtube.svg?react';

const SOCIAL_ICONS = {
  instagram: SocialInstagram,
  twitter: SocialTwitter,
  facebook: SocialFacebook,
  youtube: SocialYoutube,
};

interface Props {
  data: Speaker;
}

export const SpeakerCard = ({ data }: Props) => {
  return (
    <div className={`${styles.gridItem} ${styles.card}`}>
      <div className={styles.cardImage}>
        <img src={data.image} alt={data.name} />
      </div>

      <h3 className={styles.cardName}>{data.name}</h3>

      <p className={styles.cardRole}>{data.role}</p>

      {data.sessionTitle && (
        <div className={styles.session}>
          <span className={styles.sessionTag}>{data.sessionType}</span>
          <h4 className={styles.sessionTitle}>{data.sessionTitle}</h4>
        </div>
      )}

      <ul className={styles.cardSocials}>
        {Object.entries(data.socials).map(([key, url]) => {
          const platform = key as keyof Socials;
          const Icon = SOCIAL_ICONS[platform];

          return (
            <li key={platform}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={styles.cardSocial}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};