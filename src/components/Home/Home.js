import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://secret-reef-31392.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <div>
        {products.length === 0 && (
          <Spinner className="spinner" animation="border" variant="success" />
        )}

        {products.map((product) => (
          <Products product={product}></Products>
        ))}
      </div>
    );
};

export default Home;