import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel} from 'react-bootstrap'
export default class Baselayout extends Component{

render(){
  return (<body>


    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="#">Bloguealo!</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#"><a href="#"><NavLink  activeClassName="selected" exact to="/">Home</NavLink></a></NavItem>

        <NavItem eventKey={2} href="#"><a href="#"><NavLink  activeClassName="selected" to="/create">New Post</NavLink></a></NavItem>

        <NavItem eventKey={3} href="#"><a href="#"><NavLink  activeClassName="selected" to="/blogs">Posts</NavLink></a></NavItem>
        </Nav>
      <Nav pullRight>
      </Nav>
      </Navbar.Collapse>
      </Navbar>


        {this.props.children}


      </body>

  )
}
}
