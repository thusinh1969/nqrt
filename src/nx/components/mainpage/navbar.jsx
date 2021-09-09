import React, { Component } from "react"

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import logo from './logo.svg'

import './navbar.css'

class NavBar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div class="NavBar">
                <Navbar bg="dark" 
                variant="dark" 
                fixed='top'
                sticky='top' 
                expand='md'
                collapseOnSelect>
                    <Navbar.Brand>
                        <img src={logo} width='50px' height='50px' alt='logo'/>{' '}
                        NQRT
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href='/'>Trang chủ</Nav.Link>
                            <Nav.Link href='/style'>Phong cách</Nav.Link>

                            <NavDropdown title='Tìm mua'>
                                <NavDropdown.Item href='https://nhaxinh.vn/' target='_blank'>Nhà Xinh</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href='/recsys'>Cửa hàng NQRT</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href='/creation'>Sáng tạo</Nav.Link>
                            <Nav.Link href='/about'>Liên hệ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
