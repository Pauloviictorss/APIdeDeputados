import React from 'react'
import { Container, Dropdown, DropdownButton, InputGroup, Nav, Navbar } from 'react-bootstrap'

const Menu = () => {

  return (
    <div>
      

      <Navbar style={{ margin: '20px', borderRadius: '20px', backgroundColor: "rgba(0,0,0, 0.92)"}} variant="dark" fixed="top">
          <Container>

          <Navbar.Brand className="btn btn-success my-1" style={{height: '45px'}} href="/">SD - Site dos Deputados</Navbar.Brand>
          <Nav className="me-auto">

            {/*<Nav.Link className="w-100 mb-0 mx-3 text-danger btn btn-outline-danger" href="/partidos">Todos os Partidos</Nav.Link>*/}
          
          <InputGroup className="mb-0 mx-2">
            <DropdownButton
              variant="outline-success"
              title="Partidos"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="/partidos">Todos os Partidos</Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          <InputGroup className="mb-0 mx-2">
            <DropdownButton
              variant="outline-success"
              title="Deputados"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="/deputados">Todos os Deputados</Dropdown.Item>
              <Dropdown.Item href="/estados">Deputados por Estado</Dropdown.Item>
            </DropdownButton>
          </InputGroup>


          </Nav>
          </Container>
        </Navbar>

    </div>
  )
}

export default Menu