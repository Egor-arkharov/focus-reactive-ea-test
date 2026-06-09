import './Hero.scss';
import SocialInstagram from '@/assets/icons/social-instagram.svg?react';
import SocialTwitter from '@/assets/icons/social-twitter.svg?react';
import SocialFacebook from '@/assets/icons/social-facebook.svg?react';

export const Hero = () => {
  return (
        <section className="hero">
          <h1 className="hero__title title">Productivity <br />conf</h1>

          <p className="hero__date date">November 7—8, 2024 <br />online</p>

          <button className="hero__button button">Get Tickets</button>

          <p className='hero__lead lead'>Productivity Conference 2024&nbsp;is the essential&nbsp;AI and no-code event for performance-driven managers and entrepreneurs.</p>

          <div className="hero__social social">
            <ul className='social__list'>
              <li className='social__item'>
                <SocialInstagram />
              </li>
              <li className='social__item'>
                <SocialTwitter />
              </li>
              <li className='social__item'>
                <SocialFacebook />
              </li>
            </ul>
          </div>

          <div className="hero__indicators indicators">
            <ul className='indicators__list'>
              <li className="indicators__item">
                <p className='indicators__value'>2</p>
                <p className='indicators__text'>Days of talks</p>
              </li>
              <li className="indicators__item">
                <p className='indicators__value'>20+</p>
                <p className='indicators__text'>Speakers sharing tips</p>
              </li>
              <li className="indicators__item">
                <p className='indicators__value'>5K+</p>
                <p className='indicators__text'>Engineers attending</p>
              </li>
            </ul>
          </div>
        </section>
  );
};