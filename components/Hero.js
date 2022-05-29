import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { ReactComponent as searchIcon } from "./assets/search.svg";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <a href="#" className="flex flex-col p-auto">
                <Button color="success" className="btn-md">
                  <div>
                    <searchIcon />
                  </div>
                  <searchIcon className="searchIcon w-3/5 h-3/5" />{" "}
                  <h1>Menu</h1>
                </Button>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/Group Members.png"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
