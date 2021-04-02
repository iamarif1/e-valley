import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://secret-reef-31392.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    const handleDeleteProduct = (id) => {
        fetch(`https://secret-reef-31392.herokuapp.com/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("deleted successfully");
          });
    }
    return (
      <Container>
        <Row>
          <Col xs>
            <h5>Product Name :</h5>
            {products.map((product) => (
              <h6>{product.name}</h6>
            ))}
          </Col>
          <Col xs>
            <h5>Price :</h5>
            {products.map((product) => (
              <h6>${product.price}</h6>
            ))}
          </Col>
          <Col xs>
            <h5>Action :</h5>
            {products.map((product) => (
              <h6 onClick={() => handleDeleteProduct(product._id)}><FontAwesomeIcon icon={faTrash}/></h6>
            ))}
          </Col>
        </Row>
      </Container>
    );
};

export default DeleteProduct;