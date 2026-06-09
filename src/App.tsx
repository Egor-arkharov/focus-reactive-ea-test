import './App.scss';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Speakers } from './components/Speakers/Speakers';

function App() {
  return (
    <div className="app-container">
      <div className="decor">
        <div className="decor__item"></div>
        <div className="decor__item"></div>
        <div className="decor__item"></div>
        <div className="decor__item"></div>
      </div>

      <Header />

      <main className="app-main">
        <Hero />
        <Speakers />
      </main>
    </div>
  );
}

export default App;
