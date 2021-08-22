import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {

  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);

  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  return (
    <>
      <h1>Latests Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='Danger'>{ error }</Message>
      ) :(
        <Row>
          {products.map(product =>(
            <Col key={product._id} sm={12} md={5} lg={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen;
