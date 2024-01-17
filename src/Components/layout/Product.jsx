import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imgcade from '../../Assets/bg.jpeg'
import Harder from './Harder';
const Product = () => {
    return (

        <>
        <Harder/>
            <Card style={{ width: '18rem' }}>
                <img src={Imgcade} alt="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product
