import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NavbarApp() {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      <Navbar bg='dark' expand='lg'>
        <Container>
            <Link  className='text-light navbar-brand' to="/">Shopping Cart</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Link to="/" className='text-light nav-link'>Products</Link>
                <Link to="/cart" className='text-light nav-link'>Cart-{cart.length}</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarApp