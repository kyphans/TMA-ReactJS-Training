import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SHOPPING CART</Navbar.Brand>
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link href="#home">Cart</Nav.Link>
                        <div>
                            <Badge pill bg="info">
                                0
                            </Badge>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
