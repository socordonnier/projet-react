import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
    
  


  render() {
    return (
      <div>
        <Navbar color="faded" light color="primary">
          <NavbarBrand href="/" className="mr-auto">Bienvenue sur le site de gestion d'hôpital !! </NavbarBrand>
          
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Patients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:8000/api/v1/patients">Filtres</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
    <div >
      <Jumbotron fluid >
        <Container fluid >
          <h1 className="display-3">Bienvenue sur notre site de gestion d'hopital !!</h1>
          <p className="lead" >This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  
    
    
      </div>
    );
  }
} 