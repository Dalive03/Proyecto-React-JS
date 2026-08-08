import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './Checkout.scss';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useContext(CartContext);
  
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const createOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        buyer,
        items: cart,
        total,
        date: serverTimestamp()
      };

      const orderRef = collection(db, 'orders');
      const docRef = await addDoc(orderRef, order);
      
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Hubo un error generando la orden", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader text="Generando tu orden de compra..." />;
  }

  if (orderId) {
    return (
      <div className="order-success">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu orden ha sido generada con éxito.</p>
        <p>El código de seguimiento es:</p>
        <div className="order-id">{orderId}</div>
        <Link to="/" className="btn-return">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  // Si el carrito está vacío y llegamos aquí por URL directa, podríamos validar.
  if (cart.length === 0) {
    return (
      <div className="order-success">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn-return">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar Compra</h2>
      <form onSubmit={createOrder} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={buyer.name} 
            onChange={handleInputChange} 
            required 
            placeholder="Ej: Juan Pérez"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input 
            type="tel" 
            id="phone"
            name="phone" 
            value={buyer.phone} 
            onChange={handleInputChange} 
            required 
            placeholder="Ej: +54 11 1234 5678"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            value={buyer.email} 
            onChange={handleInputChange} 
            required 
            placeholder="Ej: juan@ejemplo.com"
          />
        </div>
        <button type="submit" className="btn-submit">
          Generar Orden
        </button>
      </form>
    </div>
  );
};

export default Checkout;
