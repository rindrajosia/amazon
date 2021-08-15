import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    }
    fetchProducts
  }, [])
  return (
    <>
      <h1>Latests Products</h1>
      <Row>
        {products.map(product =>(
          <Col key={product._id} sm={12} md={5} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen;
