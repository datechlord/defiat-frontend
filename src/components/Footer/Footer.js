import React from 'react'
import { Link } from "react-router-dom";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { SocialButtons } from '../SocialButtons/SocialButtons';
import logo from 'assets/img/defiat.png'
import pdf from 'assets/files/DFT-DeFiat-Whitepaper.pdf'
import oldPDF from 'assets/files/DFT-DeFiat-Whitepaper-V1-August28th2020.pdf'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <div className="d-inline-flex align-items-center justify-space-around">
              <img className="mr-2" width="50" height="50" src={logo} alt="logo" />
              <h1 className="title">DeFiat</h1>
            </div>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/news">
                  News
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/dashboard" tag={Link}>
                  Dashboard
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href={pdf}>
                  Whitepaper
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/legal">
                  Legal
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title d-inline-flex align-items-center">Follow us:</h3>
            <SocialButtons className="profile" />
          </Col>
        </Row>
      </Container>

      <div className="hidden">
        <a href={oldPDF}></a>
      </div>
    </footer>
  )
}