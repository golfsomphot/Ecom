import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import Imgcade from '../../Assets/pexels-alena-shekhovtcova-7036557.jpg'
import Imgcade1 from '../../Assets/pexels-alena-shekhovtcova-7036540.jpg'
import Imgcade2 from '../../Assets/pexels-alena-shekhovtcova-7036552.jpg'




import Harder from './Harder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Product = () => {
    return (

        <>
            <Harder />
            <Row>
                <Col xl={4} md={6} xs={12} >
                    <Card style={{ width: '18rem', margin: '10px' }} className="mx-auto text-center">
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
                </Col>

                <Col xl={4} md={6} xs={12}  >
                    <Card style={{ width: '18rem', margin: '10px' }} className="mx-auto text-center">
                        <img src={Imgcade1} alt="" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6} xs={12} >
                    <Card style={{ width: '18rem', margin: '10px' }} className="mx-auto text-center">
                        <img src={Imgcade2} alt="" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Product
