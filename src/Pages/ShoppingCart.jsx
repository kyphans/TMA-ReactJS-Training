import React, { Fragment } from 'react'
import Headers from '../components/ShoppingCart/Header'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Product from '../components/ShoppingCart/Products'

export default function ShoppingCart() {
    return (
        <Fragment>
            <div className="pb-2">
                <Headers />
            </div>
            <div className="row">
                <div className="col-8 py-2 bg-success">
                    <Product />
                </div>
                <div className="col-4 py-2 bg-danger">b</div>
            </div>
        </Fragment>
    )
}
