import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const Admin = () => {
      const { register,handleSubmit } = useForm();
      const [imageURL, setImageURL] = useState(null)
      const onSubmit = (data) => {
        const productData  = {
          name: data.name,
          price: data.price,
          imageURL: imageURL
        }
        console.log(data)
        const url = `https://secret-reef-31392.herokuapp.com/addProduct`;
        console.log(productData)
        fetch(url, {
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify(productData)
        })
        .then(res => console.log('sending data to server:', res))
      
      };
      
      const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set("key", "d68ae822929847cd731bb772cf1a9eaf");
        imageData.append("image", event.target.files[0]);

        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <h5>Manage:</h5>
            <Router>
              <Switch>
                <Route path="/delete">
                  <DeleteProduct/>
                </Route>
              </Switch>
            </Router>
            <Link to="/delete">
              Delete
            </Link>
          </Col>
          <Col sm={8}>
            <h5>Upload Product</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="name" ref={register} placeholder="Product Name" />
              <br/>
              <br/>
              <input type="number" name="price" ref={register} placeholder="Price"/>
              <br/>
              <br/>
              <input
                name="productImage"
                type="file"
                onChange={handleImageUpload}
              />
              <br/>
              <br/>
              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    );
};

export default Admin;