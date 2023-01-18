import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector , useDispatch } from 'react-redux';
import { deleteFromCart } from '../Redux-Toolkit/slices/cartSlice';
import { clear } from '../Redux-Toolkit/slices/cartSlice';
import './Cart.css'
function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const totalPrice = cart.reduce((acc,item) => {
    acc += item.price * item.quantity;
    return acc;
  },0)
  return (
    <>
        <h3 className='container text-light py-4'>Our Carts ..</h3>
        <button onClick={() => dispatch(clear()) } className="container btn my-3 bg-danger text-light text-center d-block w-auto p-2 border-0 ">Clear All Products</button>
        
        <div className="container">
        <h4 className='container text-light text-center py-3'>Total Price : {totalPrice.toFixed(2)}$</h4>
          <Table variant='light' className='text-center' striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
          {
            cart.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><img src={item.image} className='imageCart' alt="" /></td>
                <td>{item.price}$</td>
                <td>{item.quantity}</td>
                <td><Button className='bg-danger border-0' onClick={()=> dispatch(deleteFromCart(item))}>Delete</Button></td>
                </tr>
            ))
          }
            </tbody>
          </Table>
        </div>
    </>
  )
}

export default Cart