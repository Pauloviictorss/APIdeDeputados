import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const DetalhesDeputados = () => {
  return (
    <div>
        <Row>
            <Col>
                <Card className='mt-4 mx-1' style={{ width: '300px' }}>
                    <Card.Img style={{ borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                </Card>
            </Col>
            <Col>
                <Card className='mt-4' style={{ width: '600px', height: '300px' }}>
                    <Card.Body>
                        <Card.Title>Informações Pessoais:</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Card className='bg-light p-2 m-3 align-items-center'>
                <Card className='p-2 w-100 align-items-center bg-dark text-light'>
                    <h4>Deputados do mesmo Partido</h4>
                </Card>
                <Card className='p-2 mt-2 w-100'>
                <Row className='m-2'>
                    <Col>
                        <Card.Img style={{ width: '100px', borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                    </Col>
                    <Col>
                        <Card.Img style={{ width: '100px', borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                    </Col>
                    <Col>
                        <Card.Img style={{ width: '100px', borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                    </Col>
                    <Col>
                        <Card.Img style={{ width: '100px', borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                    </Col>
                </Row>
                </Card>
            </Card>
        </Row>
        <Row>
            <Card className='p-2 m-3 align-items-center bg-light'>
                <Card className='p-2 w-100 align-items-center bg-dark text-light'>
                    <h4>Deputados do mesmo Estado</h4>
                </Card>
                <Card className='p-2 mt-2 w-100'>
                <Row className='m-2'>
                    <Col>
                        <Card.Img style={{ width: '100px', borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                    </Col>
                    <Col>
                        <Card.Img style={{ width: '100px', borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                    </Col>
                    <Col>
                        <Card.Img style={{ width: '100px', borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                    </Col>
                    <Col>
                        <Card.Img style={{ width: '100px', borderRadius: '200px' }} variant="top" src="https://images.pexels.com/photos/9864031/pexels-photo-9864031.jpeg?cs=srgb&dl=pexels-andre-moura-9864031.jpg&fm=jpg" />
                    </Col>
                </Row>
                </Card>
            </Card>
        </Row>
    </div>
  )
}

export default DetalhesDeputados