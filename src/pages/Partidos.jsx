import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Partidos = () => {
  return (
    <div>
        <Card className='mt-5 mb-5'> 
            <input style={{ height: '40px', borderRadius: '8px' }} className='text-light bg-dark p-4' placeholder='Pesquisar...' type="Text"></input> 
        </Card>
        <Card>
            <Card className='bg-dark text-light align-items-center p-2 m-2'>
                <h1>Todos os partidos</h1>
            </Card>
            <Card className='p-2 m-2 bg-light'>
                <Row className='m-2'>
                    {/*Essa Col fica dentro do .map*/}
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>Partido 1</Link>
                    </Col>
                    {/*O resto apaga*/}
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>Partido 2</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>Partido 3</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>Partido 4</Link>
                    </Col>
                </Row>

                <Row className='m-2'>
                    <Col>
                     <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>Partido 5</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>Partido 6</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>Partido 7</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>Partido 8</Link>
                    </Col>
                </Row>

            </Card>
        </Card>
    </div>
  )
}

export default Partidos