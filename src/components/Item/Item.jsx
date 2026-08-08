import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({ id, name, price, img, stock }) => {
  return (
    <article className="item-card">
      <div className="item-img-wrapper">
        <img src={img} alt={name} className="item-img" />
      </div>
      <div className="item-info">
        <h3 className="item-title">{name}</h3>
        <span className="item-price">${price}</span>
        <span className="item-stock">Stock disponible: {stock}</span>
        <Link to={`/item/${id}`} className="item-btn">
          Ver Detalles
        </Link>
      </div>
    </article>
  );
};

export default Item;
