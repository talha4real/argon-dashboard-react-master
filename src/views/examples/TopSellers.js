import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

const TopSellers = () => {
  return (
    <>
      <Container className="mt-4" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Top Sellers</h3>
              </CardHeader>
            </Card>
          </div>
        </Row>

        <div className="header-body mt-3">
          {/* Card stats */}
          <Row>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="..."
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </span>
                    </Col>
                    <Col className="col-auto">
                      <div
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        4BULLS.GAME
                      </div>
                      <span className="h2 font-weight-bold mb-0">
                        $10,085.29
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="..."
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </span>
                    </Col>
                    <Col className="col-auto">
                      <div
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        4BULLS.GAME
                      </div>
                      <span className="h2 font-weight-bold mb-0">
                        $10,085.29
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="..."
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </span>
                    </Col>
                    <Col className="col-auto">
                      <div
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        4BULLS.GAME
                      </div>
                      <span className="h2 font-weight-bold mb-0">
                        $10,085.29
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="..."
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </span>
                    </Col>
                    <Col className="col-auto">
                      <div
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        4BULLS.GAME
                      </div>
                      <span className="h2 font-weight-bold mb-0">
                        $10,085.29
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TopSellers;
