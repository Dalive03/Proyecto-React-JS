import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <Loader text="Cargando detalle del producto..." />
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <h2>Producto no encontrado</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
