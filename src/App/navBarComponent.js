import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class NavBarComponent extends Component {
    searchhandler=(e)=>{
        this.props.history.push('');
    };


    render() {
        return (
            <Navbar  bg="dark" variant="dark">
                <NavLink className="btn btn-primary navBtn" to='/'>Home</NavLink>
                <Nav className="mr-auto">
                    <NavLink className="btn btn-primary navBtn" to="/page1">Page1</NavLink>
                    <NavLink className="btn btn-primary navBtn" to="/page2">Page2</NavLink>
                    <NavLink className="btn btn-primary navBtn" to="/page3">Page3</NavLink>
                    <NavLink className="btn btn-primary navBtn" to="/page4">Page4</NavLink>
                    <NavLink className="btn btn-primary navBtn" to="/page5">Page5</NavLink>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" onClick={this.searchhandler}>Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default NavBarComponent;