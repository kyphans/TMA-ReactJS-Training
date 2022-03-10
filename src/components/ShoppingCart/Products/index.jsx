import React, { Fragment } from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Product(props) {
    const { products, onProductClick } = props
    console.log(products);

    const handleAddProductToCart = (product) => {
        if (onProductClick) {
            onProductClick(product)
        }
    }

    return (
        <div className="m-2 text-center">
            <h3>Products</h3>
            <div className="d-flex flex-wrap justify-content-start">
                {products.map(product => (
                    <Card key={product.id} style={{ width: '18rem' }} className="p-2">
                        <Card.Img variant="top" src="https://picsum.photos/200" />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <div className="mt-auto">
                                <Card.Title >${product.price}</Card.Title>
                                <Button
                                    variant="primary"
                                    onClick={() => handleAddProductToCart(product)}
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}
