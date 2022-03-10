import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../actions/ShoppingCart'
import CartItems from '../components/ShoppingCart/CartItems'
import Headers from '../components/ShoppingCart/Header'
import Product from '../components/ShoppingCart/Products'

export default function ShoppingCart() {

    const products = [
        {
            id: 1,
            name: "Iphone 13",
            price: 399,
            description: "Features, Dual-LED dual-tone flash, HDR (photo/panorama) ; Video, 4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps)."
        },
        {
            id: 2,
            name: "Iphone 10",
            price: 199,
            description: "Features, Dual-LED dual-tone flash, HDR (photo/panorama), HDR, Dolby Vision HDR (up to 60fps)."
        },
        {
            id: 3,
            name: "Iphone 11",
            price: 299,
            description: "Video, 4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps)."
        },
        {
            id: 4,
            name: "Iphone 14",
            price: 599,
            description: "HDR, Dolby Vision HDR (up to 60fps)"
        },
        {
            id: 5,
            name: "Iphone 19",
            price: 999,
            description: "Features, Dual-LED dual-tone flash, HDR (photo/panorama)."
        },
        {
            id: 6,
            name: "Iphone 13",
            price: 399,
            description: "Features, Dual-LED dual-tone flash, HDR, Dolby Vision HDR (up to 60fps)."
        },
    ]
    const dispatch = useDispatch()
    const handleProductClick = (product) => {
        console.log("Clicked => ", product);
        dispatch(addProductToCart({ ...product, quantity: 1 }))
    }

    return (
        <Fragment>
            <div className="pb-2">
                <Headers />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 py-2 bg-light">
                        <Product
                            products={products}
                            onProductClick={handleProductClick}
                        />
                    </div>
                    <div className="col-4 py-2 bg-light">
                        <CartItems />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
