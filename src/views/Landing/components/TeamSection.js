import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { TeamCard } from './TeamCard'
import ScrollAnimation from 'react-animate-on-scroll';

export const TeamSection = () => {
  return (
    <section className="section section-lg">
      <img
        alt="..."
        className="bg about-6 floating"
        src={require("assets/img/points.png")}
      />
      <img
        alt="..."
        className="bg about-7 floating"
        src={require("assets/img/burn.png")}
      />

      <Container className="mt-4 text-center content-center">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h2 className="display-2 text-tertiary">Team</h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Row className="justify-content-center">
            <Col lg="8">
            <p>
              The DeFiat team has over 40 years of industry experience and is comprised of some of the brightest
              minds in blockchain. Since members from our team are actively employed in the industry, the team has chosen
              to stay anonymous due to potential conflicts of interest. Please feel free to reach out to the team through
              Discord or email.
            </p>
            </Col>
          </Row>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <Row>
            <TeamCard
              imageSrc={require('assets/img/defiat.png')}
              cardTitle="Stupid"
              cardSubtitle="Blockchain Developer"
              email="stupid@defiat.net"
            />
            <TeamCard
              imageSrc={require('assets/img/defiat.png')}
              cardTitle="QuantSoldier"
              cardSubtitle="dApp Developer"
              email="quantsoldier@defiat.net"
            />
            <TeamCard
              imageSrc={require('assets/img/defiat.png')}
              cardTitle="TetraGrammaton"
              cardSubtitle="PM / Developer"
              email="tetragrammaton@defiat.net"
            />
            <TeamCard
              imageSrc={require('assets/img/defiat.png')}
              cardTitle="Mandalf"
              cardSubtitle="Designer"
              email="mandalf@defiat.net"
            />
          </Row>
        </ScrollAnimation>
      </Container>
    </section>
  )
}