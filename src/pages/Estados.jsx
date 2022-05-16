import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Estados = () => {
  return (
    <div style={{ marginTop: "120px" }}>
        <Card className='mt-5 mb-5'> 
            <input style={{ height: '40px', borderRadius: '8px' }} className='text-light bg-dark p-4' placeholder='Pesquisar...' type="Text"></input> 
        </Card>
        <Card>
            <Card className='bg-dark text-light align-items-center p-2 m-2'>
                <h1>Todos os Estados</h1>
            </Card>
            <Card className='p-2 m-2 bg-light'>
                <Row className='m-2'>
                    {/*Essa Col fica dentro do .map*/}
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>AC</Link>
                    </Col>
                    {/*O resto apaga*/}
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>DF</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>SP</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>RJ</Link>
                    </Col>
                </Row>

                <Row className='m-2'>
                    <Col>
                     <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>MG</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>RS</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>ES</Link>
                    </Col>
                    <Col>
                        <Link to={'/'} className='btn btn-dark' style={{ width: '100%' }}>CE</Link>
                    </Col>
                </Row>

            </Card>
        </Card>
    </div>
  )
}

export default Estados