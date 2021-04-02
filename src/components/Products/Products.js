import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'


const Products = ({product}) => {
  const [cart, setCart] = useState([]);

  const handleAddCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  };
    return (
      <div className="col-md-3">
        <img style={{ height: "300px" }} src={product.imageURL} alt="" />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <Link to="/cart">
          <Button variant="success" onClick={() => handleAddCart(product)}>
            Buy Now
          </Button>
        </Link>
      </div>
    );
};

export default Products;