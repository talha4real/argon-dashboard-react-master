import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";
const CreateNFT = () => {
  
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <Row>
            <Col>
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <h3 className="mb-0">
                    Create collectible
                  </h3>
                  <p className="mb-0">
                    Choose “Single” if you want your
                    collectible to be one of a kind or
                    “Multiple” if you want to sell one
                    collectible multiple times
                  </p>
                </CardHeader>
              </Card>
            </Col>
          </Row>

          <div className="header-body mt-3">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Card
                  className="card-stats"
                  style={{
                    borderRadius: "26px",
                    width: "50%",
                  }}
                >
                  <CardBody>
                    <Row>
                      <Col className="col-auto">
                        <CardImg
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
                      <Col className="col-auto container">
                        <div
                          tag="h5"
                          className="text-uppercase  mb-0 mt-2"
                        >
                          Single
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
              <div className="col d-flex justify-content-center   ">
                <Card
                  className="card-stats"
                  style={{
                    borderRadius: "26px",
                    width: "50%",
                  }}
                >
                  <CardBody>
                    <Row>
                      <Col className="col-auto">
                        <CardImg
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
                      <Col className="col-auto container">
                        <div
                          tag="h5"
                          className="text-uppercase  mb-0 mt-2"
                        >
                          multiple
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default CreateNFT;
