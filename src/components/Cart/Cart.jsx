import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const { cart, clearCart, removeItem, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>No hay productos en el carrito</h2>
        <Link to="/" className="btn-return">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map(p => (
        <div key={p.id} className="cart-item">
          <div className="cart-item-info">
            <h3 className="cart-item-title">{p.name}</h3>
            <span className="cart-item-details">
              Precio unitario: ${p.price} | Cantidad: {p.quantity}
            </span>
            <span style={{color: 'var(--primary)', fontWeight: 600}}>
              Subtotal: ${p.price * p.quantity}
            </span>
          </div>
          <button className="btn-remove" onClick={() => removeItem(p.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3 className="cart-total">Total: ${total}</h3>
        <div className="cart-actions">
          <button onClick={() => clearCart()} className="btn-clear">
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="btn-checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
