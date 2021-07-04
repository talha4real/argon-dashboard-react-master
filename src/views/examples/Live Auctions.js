import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardImg,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  UncontrolledDropdown,
  Container,
  Row,
  Col,
} from "reactstrap";

const LiveAuctions = () => {
  return (
    <>
      <Container className="mt-4" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Live Auctions</h3>
              </CardHeader>
            </Card>
          </div>
        </Row>

        <div className="header-body mt-3">
          {/* Card stats */}
          <Row>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardHeader>
                  <Row>
                    <Col>
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "0",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "25px",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "50px",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </Col>

                    <Col className="col-auto">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="p-0"
                          style={{ borderRadius: "25px" }}
                        >
                          <Media className="align-items-center">
                            <Media className="d-none d-lg-block">
                              <span className="mb-0 text-sm font-weight-bold">
                                <i
                                  className="fa fa-ellipsis-h"
                                  style={{
                                    fontSize: "24px",
                                  }}
                                ></i>
                              </span>
                            </Media>
                          </Media>
                        </DropdownToggle>
                        <DropdownMenu
                          className="dropdown-menu-arrow"
                          right
                        >
                          <DropdownItem
                            to="/admin/share"
                            tag={Link}
                          >
                            <span>Share</span>
                          </DropdownItem>
                          <DropdownItem
                            to="/admin/report"
                            tag={Link}
                          >
                            <span>Report</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <CardImg
                        style={{ borderRadius: "26px" }}
                        top
                        width="100%"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                        alt="..."
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-auto">
                      <div
                        tag="h5"
                        className="text-uppercase  mb-0 mt-2"
                      >
                        4BULLS.GAME
                      </div>
                      <b className="h6 font-weight-bold mb-0">
                        Open for bids 1/1
                      </b>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardHeader>
                  <Row>
                    <Col>
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "0",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "25px",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "50px",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </Col>

                    <Col className="col-auto">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="p-0"
                          style={{ borderRadius: "25px" }}
                        >
                          <Media className="align-items-center">
                            <Media className="d-none d-lg-block">
                              <span className="mb-0 text-sm font-weight-bold">
                                <i
                                  className="fa fa-ellipsis-h"
                                  style={{
                                    fontSize: "24px",
                                  }}
                                ></i>
                              </span>
                            </Media>
                          </Media>
                        </DropdownToggle>
                        <DropdownMenu
                          className="dropdown-menu-arrow"
                          right
                        >
                          <DropdownItem
                            to="/admin/share"
                            tag={Link}
                          >
                            <span>Share</span>
                          </DropdownItem>
                          <DropdownItem
                            to="/admin/report"
                            tag={Link}
                          >
                            <span>Report</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <CardImg
                        style={{ borderRadius: "26px" }}
                        top
                        width="100%"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                        alt="..."
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-auto">
                      <div
                        tag="h5"
                        className="text-uppercase mb-0 mt-2"
                      >
                        4BULLS.GAME
                      </div>

                      <b className="h6 font-weight-bold mb-0">
                        Open for bids 1/1
                      </b>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardHeader>
                  <Row>
                    <Col>
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "0",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "25px",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "50px",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </Col>

                    <Col className="col-auto">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="p-0"
                          style={{ borderRadius: "25px" }}
                        >
                          <Media className="align-items-center">
                            <Media className="d-none d-lg-block">
                              <span className="mb-0 text-sm font-weight-bold">
                                <i
                                  className="fa fa-ellipsis-h"
                                  style={{
                                    fontSize: "24px",
                                  }}
                                ></i>
                              </span>
                            </Media>
                          </Media>
                        </DropdownToggle>
                        <DropdownMenu
                          className="dropdown-menu-arrow"
                          right
                        >
                          <DropdownItem
                            to="/admin/share"
                            tag={Link}
                          >
                            <span>Share</span>
                          </DropdownItem>
                          <DropdownItem
                            to="/admin/report"
                            tag={Link}
                          >
                            <span>Report</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <CardImg
                        style={{ borderRadius: "26px" }}
                        top
                        width="100%"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                        alt="..."
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-auto">
                      <div
                        tag="h5"
                        className="text-uppercase  mb-0 mt-2"
                      >
                        4BULLS.GAME
                      </div>

                      <b className="h6 font-weight-bold mb-0">
                        Open for bids 1/1
                      </b>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardHeader>
                  <Row>
                    <Col>
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "0",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "25px",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                      <img
                        className="avatar avatar-sm rounded-circle"
                        style={{
                          position: "absolute",
                          left: "50px",
                        }}
                        alt="..."
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </Col>

                    <Col className="col-auto">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="p-0"
                          style={{ borderRadius: "25px" }}
                        >
                          <Media className="align-items-center">
                            <Media className="d-none d-lg-block">
                              <span className="mb-0 text-sm font-weight-bold">
                                <i
                                  className="fa fa-ellipsis-h"
                                  style={{
                                    fontSize: "24px",
                                  }}
                                ></i>
                              </span>
                            </Media>
                          </Media>
                        </DropdownToggle>
                        <DropdownMenu
                          className="dropdown-menu-arrow"
                          right
                        >
                          <DropdownItem
                            to="/admin/share"
                            tag={Link}
                          >
                            <span>Share</span>
                          </DropdownItem>
                          <DropdownItem
                            to="/admin/report"
                            tag={Link}
                          >
                            <span>Report</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="col-auto">
                      <CardImg
                        style={{ borderRadius: "26px" }}
                        top
                        width="100%"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                        alt="..."
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-auto">
                      <div
                        tag="h5"
                        className="text-uppercase  mb-0 mt-2"
                      >
                        4BULLS.GAME
                      </div>
                      <b className="h6 font-weight-bold mb-0">
                        Open for bids 1/1
                      </b>
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

export default LiveAuctions;
