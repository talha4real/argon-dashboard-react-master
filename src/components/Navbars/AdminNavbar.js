import React from "react";
import { Link } from "react-router-dom";
import { NavLink as NavLinkRRD } from "react-router-dom";
import { PropTypes } from "prop-types";
import {
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  UncontrolledCollapse,
  Row,
  Col,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
  Media,
} from "reactstrap";

const AdminNavbar = (props) => {
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (
        prop.name === "Login" ||
        prop.name === "Register"
      ) {
        return null;
      } else
        return (
          <NavItem className="p-0 m-0" key={key}>
            {prop.name === "Community" ? (
              <NavLink className="mt-2 p-0 bg-transparent">
                <UncontrolledDropdown>
                  <DropdownToggle className="bg-transparent text-white border-0">
                    <Media className="align-items-center">
                      <Media className="ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm font-weight-bold">
                          Community
                        </span>
                      </Media>
                    </Media>
                  </DropdownToggle>
                  <DropdownMenu
                    className="dropdown-menu-arrow"
                    right
                  >
                    <DropdownItem
                      to="/admin/discussion"
                      tag={Link}
                    >
                      <span>Discussion</span>
                    </DropdownItem>
                    <DropdownItem
                      to="/admin/voting"
                      tag={Link}
                    >
                      <span>Voting</span>
                    </DropdownItem>
                    <DropdownItem
                      to="/admin/suggest-features"
                      tag={Link}
                    >
                      <span>Suggest feature</span>
                    </DropdownItem>
                    <DropdownItem divider />
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavLink>
            ) : prop.name === "Create" ? (
              <NavLink
                className="p-2"
                to={prop.layout + prop.path}
                tag={NavLinkRRD}
                activeClassName="active"
              >
                <Button style={{ borderRadius: "25px" }}>
                  {prop.name}
                </Button>
              </NavLink>
            ) : (
              <NavLink
                className="mt-2 p-2"
                to={prop.layout + prop.path}
                tag={NavLinkRRD}
                activeClassName="active"
              >
                {prop.name}
              </NavLink>
            )}
          </NavItem>
        );
    });
  };
  const { bgColor, routes } = props;

  return (
    <>
      <Navbar
        className="navbar-top navbar-horizontal navbar-dark p-0"
        style={{ whiteSpace: "nowrap" }}
        expand="md"
      >
        <Container className="p-0">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={
                require("../../assets/img/brand/argon-react-white.png")
                  .default
              }
            />
          </NavbarBrand>
          <Form className="navbar-search navbar-search-dark form-inline mr-lg-auto d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  style={{ width: "120px" }}
                  placeholder="Search"
                  type="text"
                />
              </InputGroup>
            </FormGroup>
          </Form>

          <button
            className="navbar-toggler"
            id="navbar-collapse-main"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            navbar
            toggler="#navbar-collapse-main"
          >
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/brand/argon-react.png")
                          .default
                      }
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    id="navbar-collapse-main"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="mx-auto" navbar>
              {createLinks(routes)}
            </Nav>
          </UncontrolledCollapse>
          <Nav
            className="align-items-center d-none d-md-flex"
            navbar
          >
            <UncontrolledDropdown navbar>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/team-4-800x800.jpg")
                          .default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Bilawal Hussain
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-arrow"
                right
              >
                <DropdownItem
                  className="noti-title"
                  header
                  tag="div"
                >
                  <h6 className="text-overflow m-0">
                    Welcome!
                  </h6>
                </DropdownItem>
                <DropdownItem
                  to="/admin/user-profile"
                  tag={Link}
                >
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem
                  to="/admin/user-profile"
                  tag={Link}
                >
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem
                  to="/admin/user-profile"
                  tag={Link}
                >
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  to="/auth/login"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
AdminNavbar.defaultProps = {
  routes: [{}],
};
AdminNavbar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};
export default AdminNavbar;
