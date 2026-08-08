import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../services/asyncMock';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import Hero from '../Hero/Hero';
import './ItemListContainer.scss';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {!categoryId && <Hero />}
      <div className="item-list-container">
        <h2 className="greeting">{greeting}</h2>
        {loading ? (
          <Loader text="Cargando productos..." />
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
