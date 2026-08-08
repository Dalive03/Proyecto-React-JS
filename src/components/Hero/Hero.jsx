import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Colección Premium 2024</h1>
        <p className="hero-subtitle">
          Descubre los mejores productos seleccionados especialmente para ti, con la calidad y diseño que mereces.
        </p>
        <Link to="/category/electronics" className="btn-hero">
          Comprar Ahora
        </Link>
      </div>
    </section>
  );
};

export default Hero;
