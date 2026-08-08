import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    
    const item = {
      id, name, price, img
    };
    
    addItem(item, quantity);
  };

  return (
    <article className="item-detail-card">
      <div className="item-detail-img-container">
        <img src={img} alt={name} className="item-detail-img" />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-title">{name}</h2>
        <p className="item-detail-desc">{description}</p>
        <span className="item-detail-price">${price}</span>
        <span className="item-detail-stock">Stock disponible: {stock}</span>
        
        <footer>
          {quantityAdded > 0 ? (
            <Link to="/cart" className="btn-finish">
              Terminar mi compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </div>
    </article>
  );
};

export default ItemDetail;
