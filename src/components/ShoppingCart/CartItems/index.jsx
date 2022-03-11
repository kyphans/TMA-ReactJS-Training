import React, { useEffect, useState, useRef } from 'react'
import { Button, ListGroup, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function CartItems() {


    const totalPrice = useRef(0);
    const cart = useSelector(state => state.shoppingCart.cart)

    useEffect(() => {
        totalPrice.current = cart.reduce(function (acc, obj) { return acc + (obj.price * obj.quantity); }, 0);
    })

    console.log(cart.length);
    return (
        <div>
            <h3 className="text-center">Cart Items</h3>
            <ListGroup as="ol" numbered style={{ "minHeight": "200px" }}>
                {cart.length !== 0
                    ? cart.map(product => (
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-center"
                            key={product.id + Math.random()}
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{product.name}</div>
                                ${product.price}
                            </div>
                            <div>
                                <Badge bg="primary" pill>
                                    {product.quantity}
                                </Badge>
                            </div>
                        </ListGroup.Item>
                    ))
                    : <ListGroup.Item className='h-100'>"Nothing"</ListGroup.Item>
                }

            </ListGroup>
            <div className="mt-3">
                <ListGroup>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-auto">
                            <span className="fw-bold">Total Price</span>
                            <span className="ms-2">${totalPrice.current}</span>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <div className="d-grid gap-2">
                    <Button size="lg" variant="warning">
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}
