import React, { Component } from "react"

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import logo from './logo_nqrt.jpg'

import './navbar.css'

class NavBar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div class="NavBar">
                <Navbar className="bg-navbarbg"
                variant="dark" 
                fixed='top'
                sticky='top' 
                expand='md'
                collapseOnSelect>
                    <Navbar.Brand>
                    <Nav.Link style={{"color":"white"}} href='/'><img src={logo} width='auto' height='30px' alt='logo'/></Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link style={{"color":"darkgreen"}} href='/style'><b>Phong cách</b></Nav.Link>
                            <Nav.Link style={{"color":"darkgreen"}}  href='/match'><b>So sánh</b></Nav.Link>
                            <NavDropdown style={{"color":"darkgreen"}} color="darkgreen" title='Tìm mua'>
                                <NavDropdown.Item  style={{"color":"darkgreen"}} href='https://nhaxinh.com/' target='_blank'><b>Nhà Xinh</b></NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item style={{"color":"darkgreen"}} href='/recsys'><b>Cửa hàng NQRT</b></NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link style={{"color":"darkgreen"}}  href='/creation'><b>Sáng tạo</b></Nav.Link>
                            <Nav.Link style={{"color":"darkgreen"}}  href='/about'><b>Liên hệ</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
