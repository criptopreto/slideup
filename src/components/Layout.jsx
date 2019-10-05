import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../App';
import Dashboard from '../pages/Login';

class Layout extends React.Component {
    render() {
        return(
            <Router>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Sl!de Up!</Navbar.Brand>
                        <Navbar.Toggle aria-controls="menu-navbar-nav"/>
                        <Navbar.Collapse id="menu-navbar-nav">
                            <Nav className="mr-auto text-primary">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Layout;