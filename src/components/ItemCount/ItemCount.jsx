import { useState } from 'react';
import './ItemCount.scss';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="controls">
        <button onClick={decrement} disabled={count <= 1}>-</button>
        <span className="count-display">{count}</span>
        <button onClick={increment} disabled={count >= stock}>+</button>
      </div>
      <button 
        className="btn-add" 
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ItemCount;
