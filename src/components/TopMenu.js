import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Container
} from 'reactstrap';
import { Link } from "react-router-dom";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md" className="position-sticky sticky-top">
        <Container>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem> */}
                <NavLink>
                  <Link to='/'>Home</Link>
                </NavLink>
              {/* </NavItem> */}
              <NavLink>
                <Link to='/products'>products</Link>
              </NavLink>
              <NavLink>
                <Link to='/about'>About</Link>
              </NavLink>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}