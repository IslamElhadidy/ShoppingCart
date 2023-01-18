import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux-Toolkit/slices/cartSlice';
import { fetchProducts } from '../Redux-Toolkit/slices/productsSlice';
import './Products.css'

function Products() {

    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const res = await axios('https://fakestoreapi.com/products/categories');
        setCategories(res.data)
    }
    const [productss, setProductss] = useState([]);
    const getProducts = async () => {
        const res = await axios('https://fakestoreapi.com/products');
        setProductss(res.data)
        console.log(productss);
    }

    const getProductByCategories = async ($category) => {
        const res = await axios(`https://fakestoreapi.com/products/category/${$category}`);
        setProductss(res.data)
    }

    const products = useSelector((state) => state.products)

    const dispatch = useDispatch();
    useEffect(()=> {
        getProducts();
        dispatch(fetchProducts());
        getCategories();
    },[])
  return (
    <>
        <h3 className='container text-light py-4'>Our Products ..</h3>
        <div className="container">
            <div className='d-flex justify-content-center my-3'>
                {
                    categories.map((category) => {
                        return(<button onClick={() => getProductByCategories(category)} className='btn mb-4 btn-primary mx-2'>{category}</button>)
                    })
                }
            </div>
            <Row>
                {
                    productss.map((item) => (
                        <Col className='col-md-3 d-flex mb-4 ' key={item.id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className='image' variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title className='title'>{item.title.slice(0,15)}...</Card.Title>
                            <Card.Text className='desc'>
                            {item.description.slice(0,20 )}...
                            </Card.Text>
                            <span className='d-block pb-3'>{item.price}$</span>
                            <Button variant="primary" onClick={() => dispatch(addToCart(item))} >Add To Cart</Button>
                        </Card.Body>
                        </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    </>
  )
}

export default Products