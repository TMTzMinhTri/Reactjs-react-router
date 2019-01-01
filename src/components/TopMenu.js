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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import { cartContext } from "./Cart";

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
    const icCart = <FontAwesomeIcon className="fontSize25 mr-2" icon={faCartPlus} />

    return (
      <Navbar color="light" light expand="md" className="position-sticky sticky-top">
        <Container>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink>
                <Link to='/'>Home</Link>
              </NavLink>
              <NavLink>
                <Link to='/products'>products</Link>
              </NavLink>
              <NavLink>
                <Link to='/about'>About</Link>
              </NavLink>
              <NavLink>
                <cartContext.Consumer>
                  { ({ cartItem }) => <Link to='/about'>{icCart}Cart [{cartItem.length}]</Link> }
                  
                </cartContext.Consumer>
              </NavLink>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}