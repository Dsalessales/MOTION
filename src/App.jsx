import { useState } from 'react';

import FlexCarousel from './components/FlexCarousel';
import { obras } from './data/obras';
import './App.css';

const NAV = ['Exposições', 'Artistas', 'Acervo', 'Visite'];

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <main className="hero">
      <header className="hero__bar">
        <a className="hero__brand" href="#">
          MOTION
        </a>
        <nav className="hero__nav" aria-label="Principal">
          {NAV.map(item => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
        <a className="hero__ticket" href="#">
          Ingressos
        </a>
      </header>

      <section className="hero__intro">
        <h1 className="hero__title">
          Arts <em>em cartaz</em>
        </h1>
      </section>

      <div className="hero__stage">
        <FlexCarousel
          items={obras}
          preset="liquid"
          intro="rise"
          cardHeight={0.5}
          gap={12}
          squeeze={0.2}
          focusOnClick
          captions
          fit="natural"
          radius={0}
          lensWidth={0.74}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.34}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel
          onChange={setActive}
        />
      </div>

      <footer className="hero__foot">
        <p className="hero__lede">
          Onze obras entre escultura, fotografia e instalação investigam o que acontece quando o material deixa de
          obedecer à forma.
        </p>
        <div className="hero__center">
          <p className="hero__hint" aria-hidden="true">
            Arraste, role ou use as setas · clique para ampliar
          </p>
          <p className="hero__credit">
            Feito por <strong>digi studio</strong>
          </p>
        </div>
        <div className="hero__actions">
          <span className="hero__progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${(active + 1) / obras.length})` }} />
          </span>
          <a className="hero__cta" href="#">
            Ver exposição <span aria-hidden="true">→</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
