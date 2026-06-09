import type { Speaker } from './types';
import rachelImg from '@/assets/images/speaker-rachel.png';
import charityImg from '@/assets/images/speaker-charity.png';
import krasimirImg from '@/assets/images/speaker-krasimir.png';
import vanessaImg from '@/assets/images/speaker-vanessa.png';
import bassemImg from '@/assets/images/speaker-bassem.png';

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 1,
    image: rachelImg,
    name: 'Rachel Nabors',
    role: 'DevX consultant, USA',
    sessionType: 'Talk',
    sessionTitle: 'Managing Ourselves Managing Each Other',
    socials: { instagram: '#', twitter: '#', facebook: '#', youtube: '#' }
  },
  {
    id: 2,
    image: charityImg,
    name: 'Charity Majors',
    role: 'honeycomb.io, USA',
    sessionType: 'Talk',
    sessionTitle: 'The Art of Interviewing People or How to Identify Senior Talent',
    socials: { instagram: '#', twitter: '#', facebook: '#', youtube: '#' }
  },
  {
    id: 3,
    image: krasimirImg,
    name: 'Krasimir Tsonev',
    role: 'Antidote.me, Bulgaria',
    socials: { instagram: '#', twitter: '#', facebook: '#', youtube: '#' }
  },
  {
    id: 4,
    image: vanessaImg,
    name: 'Vanessa Raath',
    role: 'The Talent Hunter, South Africa',
    socials: { instagram: '#', twitter: '#', facebook: '#', youtube: '#' }
  },
  {
    id: 5,
    image: bassemImg,
    name: 'Bassem Dghaidi',
    role: 'GitHub, Netherlands',
    socials: { instagram: '#', twitter: '#', facebook: '#', youtube: '#' }
  }
];