import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';


export default function NaviBar(props) {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{props.user.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/main">Main</Link>
        </Nav>
        <Form inline onSubmit={(e)=>props.handleSearch(e)}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => props.setSearch(e.target.value)} />
          <Button type='submit' variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
