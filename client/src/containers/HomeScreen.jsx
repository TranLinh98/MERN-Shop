import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product/Product';
import { listProducts } from '../redux/actions/productActions';
import Loading from '../components/Ui/Loading/Loading';
import Message from '../components/Ui/Message/Message';
import alertify from 'alertifyjs';

const HomeScreen = () => {
  const products = useSelector((state) => state.productList.products);
  const loading = useSelector((state) => state.productList.loading);
  const error = useSelector((state) => state.productList.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    error && alertify.error(error);
  }, [error]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
