import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from './../services/apiDeputados'


const DetalhesDeputados = () => {

    const params = useParams()
    const [deputado, setDeputado] = useState({})
    const [mesmopartido, setMesmopartido] = useState([])
   

    useEffect(() => {
        apiDeputados.get('deputados/' + params.id ).then(resultado => {
            setDeputado(resultado.data.dados)
            console.log(resultado.data)
        })

        apiDeputados.get('partidos/' +params.id +  '/membros').then(resultado=>{
            setMesmopartido(resultado.data.dados)
            console.log(resultado.data)
        })
     
    }, [])



  return (

    
    <div style={{ marginTop: "120px" }}>
        {!deputado.id && <h1>Carregando... Aguarde!</h1>}

        {deputado.id &&
            <div>
                <h1>{deputado.nome}</h1>
                <Row>
                    <Col md={4}>
                        <Card className='mb-4' style={{ borderRadius: "30px", borderColor: "white" }}>
                            <Card.Img style={{ borderRadius: "30px" }} variant="top" src={deputado.ultimoStatus.urlFoto} />
                            <Link className='btn btn-warning mt-4' to={-1 }> VOLTAR </Link>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card style={{ borderRadius: "20px", borderColor: "white" }} className="p-3 bg-light">
                            <Card className='bg-dark text-light' style={{ borderRadius: "10px" }}>
                                <h1 className='mx-3'>{deputado.ultimoStatus.nome}</h1>
                            </Card>
                            <Card className='p-3 text-dark' style={{ borderRadius: "5px" }}>
                                <Card className='px-3 pt-2 mb-1'>
                                    <p style={{ fontSize: "18pt" }}><strong>Nome Civil: </strong>{deputado.nomeCivil}</p>
                                </Card>
                                <Card className='px-3 pt-2 mb-1'>
                                    <p style={{ fontSize: "18pt" }}><strong>Partido: </strong>{deputado.ultimoStatus.siglaPartido}</p>
                                </Card>
                                <Card className='px-3 pt-2 mb-1'>
                                    <p style={{ fontSize: "18pt" }}><strong>Estado: </strong>{deputado.ultimoStatus.siglaUf}</p>
                                </Card>
                                <Card className='px-3 pt-2 mb-1'>
                                    <p style={{ fontSize: "18pt" }}><strong>E-mail: </strong>{deputado.ultimoStatus.email}</p>
                                </Card>
                                <Card className='px-3 pt-2 mb-1'>
                                    <p style={{ fontSize: "18pt" }}><strong>Condição Eleitoral: </strong>{deputado.ultimoStatus.condicaoEleitoral}</p>
                                </Card>
                                <Card className='px-3 pt-2 mb-1'>
                                    <p style={{ fontSize: "18pt" }}><strong>Escolaridade: </strong>{deputado.escolaridade}</p>
                                </Card>
                                <Card className='px-3 pt-2 mb-1'>
                                    <p style={{ fontSize: "18pt" }}><strong>Data de Nascimento: </strong>{deputado.dataNascimento}</p>
                                </Card>
                                <Card className='px-3 pt-2 mb-1'>
                                    <p style={{ fontSize: "18pt" }}><strong>CPF: </strong>{deputado.cpf}</p>
                                </Card>
                            </Card>
                        </Card>
                    </Col>


                
                </Row>
                
                
            </div>
        }

        
        <Row>
            <Card className='bg-light p-2 m-3 align-items-center'>
                <Card className='p-2 w-100 align-items-center bg-dark text-light'>
                    <h4>Deputados do mesmo Partido</h4>
                </Card>
                <Card className='p-2 mt-2 w-100'>
                <Row className='m-2'>
                    {mesmopartido.map(item => (
                        <Col className="mb-3" md={2} key={item.id}>
                                <Link to={'/detalhesdeputado/' + item.id}>
                                    <Card title={item.name}>
                                    <Card.Img variant="top" src={'https://www.camara.leg.br/internet/deputado/bandep/' + item.profile_path} />
                                </Card>
                            </Link>
                        </Col>
                        ))}
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