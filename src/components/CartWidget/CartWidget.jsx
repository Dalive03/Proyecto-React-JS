import { useContext } from 'react';
import { ShoppingCart as CartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartWidget.scss';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget" style={{ display: totalQuantity > 0 ? 'flex' : 'none' }}>
      <CartIcon size={24} strokeWidth={2} />
      {totalQuantity > 0 && (
        <span className="cart-badge">{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;
