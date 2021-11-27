//React
import React from "react";

//Gatsby
import { withPrefix } from "gatsby";
import styled from "styled-components";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import { FaGithub, FaTwitter, FaUniversity } from "react-icons/fa";
import { SiAcademia, SiResearchgate } from "react-icons/si";
import {GiIceIris} from "react-icons/gi"

const Footer = () => {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2>About</h2>
              <h3>Laboratorio di Archeologia Digitale alla Sapienza</h3>
              <p>Responsabile: Julian Bogdani</p>
              <p>Dipartimento SARAS · Sapienza Università di Roma</p>
            </Col>
            <Col>
              <h2>Contact</h2>
              <p> Julian Bogdani</p>
              <p> Domizia D'Erasmo</p>
              <p> Paolo Rosati</p>
              <div className="social">
                <p>
                  <FaGithub className="icon"></FaGithub>
                  <SiAcademia className="icon"></SiAcademia>
                  <GiIceIris className="icon"></GiIceIris>
                  <SiResearchgate className="icon"></SiResearchgate>
                  <FaTwitter className="icon"></FaTwitter>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
}
const Wrapper = styled.section`
  h2 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1.5rem;
  }
  h3 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 200;
    font-size: 1.1rem;
  }
  p {
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 0.9rem;
  }
  .container {
    border-top: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
  }
  .row {
    margin-top: 6rem;
    margin-bottom: 3rem;
  }
  .icon {
    margin-right: 1rem;
  }
  .social {
    padding-top: 1.5rem;
  }
`;
export default Footer
