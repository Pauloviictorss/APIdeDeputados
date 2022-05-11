import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div>
        <Container className='mt-5'>
            <Row xs={1} sm={1} md={1} lg={2} xl={2}>
                <Col className="mb-3">
                    
                    <Card className='p-2 bg-light'>
                        <Card className='m-2 bg-dark text-light align-items-center'>
                            <h4>Deputados por Estado</h4>
                        </Card>
                        <Card className='m-2'>
                            <Row className='p-2'>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>SP</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='p-2'>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='p-2'>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                        <Link to={'/estados'} className='btn btn-success'>Ver todos os Estados</Link>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-2 bg-light'>
                        <Card className='m-2 bg-dark text-light align-items-center'>
                            <h4>Principais Partidos</h4>
                        </Card>
                        <Card className='m-2'>
                            <Row className='p-2'>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>SP</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='p-2'>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='p-2'>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='bg-light align-items-center'>
                                        <h5>DF</h5>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                        <Link to={'/partidos'} className='btn btn-success'>Ver todos os Partidos</Link>
                    </Card>
                </Col>
            </Row>
            <Link to={'/detalhesdeputado'} className='btn btn-success m-2'>Teste Detalhes Deputado</Link>
            <Link to={'/detalhespartido'} className='btn btn-success m-2'>Teste Detalhes Partido</Link>
        </Container>
    </div>
  )
}

export default HomeScreen