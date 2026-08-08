import { Link } from 'react-router-dom';
import { Store } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Store size={24} color="#6366f1" />
            <h3 style={{ margin: 0 }}>LuminaStore</h3>
          </div>
          <p>
            Tu tienda en línea de confianza. Ofrecemos los mejores productos electrónicos, ropa y accesorios con envíos a todo el país.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/category/electronics">Electrónica</Link></li>
            <li><Link to="/category/clothing">Ropa</Link></li>
            <li><Link to="/cart">Mi Carrito</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Ayuda & Soporte</h3>
          <ul className="footer-links">
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Política de Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LuminaStore. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
